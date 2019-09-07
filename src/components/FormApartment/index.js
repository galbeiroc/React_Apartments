import React, {useState} from 'react'
import axios from 'axios';
import './FormApartment.sass'


const FormApartment = ({ setReload }) => {
    //creation Variable initialState to initialize the empties inputs and restart inputs value
    const initialState = {
        numApartment: '',
        meter: '', 
        price: ''
    }

    //creation state apartment, that receive the variable initialState
    const [ apartment, setApartment ] = useState(initialState);
    //console.log(apartment);

    //Detect changes on inputs. Capturing event onChange the value on Inputs
    const handleChange =  ({ target: {name, value} }) => {
        //console.log(apartment)
        setApartment({
            ...apartment, 
            [name]: value
        })

    }

    //Function handleSubmit Send to data at the api
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
            //Restart inputs values
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
                        className="dataInput autoInput"
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


