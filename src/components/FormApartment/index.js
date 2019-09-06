import React, {useState} from 'react'
import axios from 'axios';
import './FormApartment.sass'


const FormApartment = ({ setReload }) => {
    const initialState = {
        numApartment: '',
        meter: '', 
        price: ''
    }

    const [ apartment, setApartment ] = useState(initialState);
    //console.log(apartment);

    const handleChange =  ({ target: {name, value} }) => {
        console.log(apartment)
        setApartment({
            ...apartment, 
            [name]: value
        })
        //console.log(apartment)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3100/apartments', apartment);
            if(!res){
                console.log(`Error Saving Data ${res}`);
                return
            }
            alert('Successfully added!');
            setReload(true);
            setApartment(initialState);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div>
            <form action="" className="form" method="POST" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        name="numApartment" 
                        className="dataInput"
                        value={apartment.numApartment}
                        placeholder="No. Apartment"
                        onChange={handleChange}
                        autoFocus
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name="meter" 
                        className="dataInput"
                        value= {apartment.meter}
                        placeholder="Meters"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name="price" 
                        className="dataInput"
                        value={apartment.price}
                        placeholder="Price"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit" className="addApartment">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormApartment
