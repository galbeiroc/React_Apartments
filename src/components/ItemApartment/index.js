import React, {useState} from 'react';
import axios from 'axios';
import _ from 'lodash';
import './ItemApartment.sass';

const ItemApartment = (props) => {
    //creation states apartment, edit
    const [ apartment, setApartment  ] = useState(props.apartment);
    const [ edit, setEdit ] = useState(false);

    //Detect changes on inputs. Capturing event onChange the value on Inputs
    const handleChange = ({ target : {name, value}}) => {
        setApartment({
            ...apartment,
            [name]: value
        })
    }

    //Function handleDoubleClick active with event onDoubleClick on cell to Edit, 
    const handleDoubleClick = () => {
        if(edit) {
            handleUpdate();
        }else{
            setEdit(true);
        }
    }

    //Function detect press to key Enter on cell to edit, and call to Function handleUpdate
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            handleUpdate();
        }
    }
    
    //Function Update to cell, this 
    const handleUpdate = async () =>{
        try {
            setEdit(false);
            //Use lodash _ and function isEqual compare to elements
            if(!_.isEqual(apartment, props.apartment)) {
                const res = await axios.put(`http://localhost:3100/apartments/${apartment._id}`, apartment);
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
            {/** Call handleDoubleClick at press twice click. The validate state Edit in case is True dealing to show the cell of the rows and pressing the key Enter.*/}
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
                {/**Show datas on table */}
                <div className="flex-row">{apartment.numApartment}</div>
                <div className="flex-row">{apartment.meter}</div>
                <div className="flex-row">{apartment.price}</div>
            </>
            }            
        </div>
    )
}

export default ItemApartment
