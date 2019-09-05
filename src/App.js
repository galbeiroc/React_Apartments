import React, {useState, useEffect} from 'react';
import FormApartment from './components/FormApartment';
import ListApartment from './components/ListApartment';
import axios from 'axios';

import './App.css';
import { async } from 'q';

const App = () => {
  const [apartment, setApartment] = useState([])

  const getApartment = async () => {
    try {
      const res = await axios.get('http://localhost:3100/apartments');
      if(!res) {
        console.log('Error Getting Apartments');
      }
      setApartment(res.data)
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="container">
        <div className="apartmentForm">
          <FormApartment />
        </div>
        <ListApartment />
    </div>
  );
}

export default App;
