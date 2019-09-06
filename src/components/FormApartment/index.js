import React, {useState} from 'react'

const FormAparment = ({ setReload }) => {
    const initialState = {
        numApartment: '',
        meter: '', 
        price: ''
    }

    const [ apartment, setApartment ] = useState(initialState);

    const handleChange =  ({target: {name, value }}) => {
        setApartment({
            ...apartment,
            [name]: value
        })
    }

    return (
        <div>
            <form action="" method="post">
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

export default FormAparment
