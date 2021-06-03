import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
//import Buscar from './components/Buscar/Barra';
import api from './service/api';
import ApiData from './Data/Api-data';

import './App.css';
import Apidata from './Data/Api-data';

const App = () => {

  const [personagem, setPersonagem] = useState([]);
  const [busca, setBusca] = useState("");
  const [consulta, setConsulta] = useState('rick');

  useEffect(() => {
    api.get(`/character/?name=${consulta}`)
    .then(response => {
      setPersonagem(response.data.results)
      console.log(response.data.results)
    }).catch(err => console.log(err))
  },[consulta])

  const updateBusca = e => {
    setBusca(e.target.value);
  }

  const getBusca = e => {
    e.preventDefault();
    setConsulta(busca);
    setBusca('');
  }
  


  return (
    <div className="App">
      <Header titulo="API - Rick and Morty"/>
      
      <form className="form-busca" onSubmit={getBusca}>
        <input 
        className="form-input"
        value={busca}
        type="text"
        onChange={updateBusca}
        placeholder="Informe um nome." 
        />
        <button className="form-btn">Buscar</button>
      </form>

      { personagem.map(per => (
        <div className="containerPersonagem" key={`${per.id}`}>
          <Apidata
            nome={per.name}
            status={per.status}
            imagem={per.image}
          />
        </div>
      ))
      }

    </div>
  );
}

export default App;
