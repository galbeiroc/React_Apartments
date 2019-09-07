import React, {useState, useEffect} from 'react';
import FormApartment from './components/FormApartment';
import ListApartment from './components/ListApartment';
import axios from 'axios';

import './App.sass';


const App = () => {
  //Creation of the state apartments, reload
  const [ apartments, setApartments ] = useState([]); //array
  const [ reload, setReload ] = useState(true); //boolean

  //Function getApartment gets api data
  const getApartment = async () => {
    try {
      const res = await axios.get('http://localhost:3100/apartments')
      if(!res) {
        console.log(`Error Receiving Data ${res}`);
        return
      }

      console.log(res.data);
      setApartments(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  //Hook useEffect will be executed if reload change
    useEffect(()=> {
    if (reload) {
      getApartment();
      setReload(false)
    }
  },[reload])

  return (    
      <div>
        <div>
        <h2 className="title">Aparment Test</h2>
        </div>
        
        <div className="container">
          <div className="apartmentForm">
            <FormApartment setReload={setReload}/>
          </div>
          <ListApartment apartments={apartments}/>
        </div>
      </div>
  );
}

export default App;
