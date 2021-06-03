import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Busca from './components/Buscar/Busca';
import api from './service/api';

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
      <Busca
        gBusca={getBusca}
        vbusca={busca}
        uBusca={updateBusca}
      />
      
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
