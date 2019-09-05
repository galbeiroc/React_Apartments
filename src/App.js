import React, {useState, useEffect} from 'react';
import FormApartment from './components/FormApartment';
import ListApartment from './components/ListApartment'
import './App.css';

function App() {
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
