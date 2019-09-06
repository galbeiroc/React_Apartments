import React, {useState, useEffect} from 'react';
import FormApartment from './components/FormApartment';
import ListApartment from './components/ListApartment';
import axios from 'axios';

import './App.sass';
//import { async } from 'q';

const App = () => {
  const [ apartment, setApartment ] = useState([]);
  const [ reload, setReload ] = useState(true);

  const getApartment = async () => {
    try {
      const res = await axios.get('http://localhost:3100/apartments')
      if(!res) {
        console.log(`Error Receiving Data ${res}`);
        return
      }

      console.log(res.data);
      setApartment(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    if (reload) {
      getApartment();
      setReload(false)
    }
  },[reload])

  return (
    <div className="container">
        <div className="apartmentForm">
          <FormApartment setReload={setReload}/>
        </div>
        {/* <ListApartment /> */}
    </div>
  );
}

export default App;
