import React, {useState} from 'react';
import axios from 'axios';
import _ from 'lodash';
import './ItemApartment.sass';

const ItemApartment = ({ apartment: actual }) => {
    const [ apartment, setApartment  ] = useState(actual);
    const [ edit, setEdit ] = useState(false);

    const handleChange = ({ target : {name, value}}) => {
        setApartment({
            ...apartment,
            [name]: value
        })
    }

    const handleDoubleClick = () => {
        if(edit) {
            handleUpdate();
        }else{
            setEdit(true);
        }
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            handleUpdate();
        }
    }

    const handleUpdate = () =>{
        try {
            setEdit(false);
            if(!_.isEqual(apartment, actual)) {
                const res = axios.put(`http://localhost:3100/apartments/${apartment._id}`, apartment);
                if(!res) {
                    console.log('Error Updating Apartment');
                    return
                }
                alert('Updated successfully');
            } else {
                alert('There are not Changes');
            }
        } catch (error) {
            console.error(error);
            
        }
    }
    return (
        <div className="flex-table row" onDoubleClick={handleDoubleClick} onKeyDown={handleKeyDown}>
            {edit?
            <>
                <input type="text"
                    className="flex-row inputEdit"
                    name="numApartment"
                    value={apartment.numApartment}
                    onChange={handleChange}
                />
                <input type="text"
                    className="flex-row inputEdit"
                    name="meter"
                    value={apartment.meter}
                    onChange={handleChange}
                />
                <input type="text"
                    className="flex-row inputEdit"
                    name="price"
                    value={apartment.price}
                    onChange={handleChange}
                />
            </>
            :
            <>
                <div className="flex-row">{apartment.numApartment}</div>
                <div className="flex-row">{apartment.meter}</div>
                <div className="flex-row">{apartment.price}</div>
            </>
            }            
        </div>
    )
}

export default ItemApartment
