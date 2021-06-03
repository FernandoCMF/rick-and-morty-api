import React, { useEffect } from 'react';
import Header from './components/header/Header';
import api from './service/api';

import './App.css';

const App = () => {

  useEffect(() => {
    api.get('/character')
    .then(response => console.log(response.data.results));
  },[])

  
  return (
    <div className="App">
      <Header titulo="API - Rick and Morty"/>
    </div>
  );
}

export default App;
