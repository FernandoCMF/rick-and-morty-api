import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Busca from './components/buscar/Busca';
import api from './service/api';
import Apidata from './data/Api-data';
import Filtro from './components/filtro/Filtro';

const App = () => {

  const [personagem, setPersonagem] = useState([]);
  const [busca, setBusca] = useState("");
  const [consulta, setConsulta] = useState('');

  useEffect(() => {
    api.get(`/character/?name=${consulta}&status=alive`)
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
      <Busca gBusca={getBusca} vbusca={busca} uBusca={updateBusca} />
      <Filtro/>

      
      <div className="containerPersonagem">
        { personagem.map(per => (
          <div className="Personagens" key={`${per.id}`}>
            <Apidata
              nome={per.name}
              status={per.status}
              imagem={per.image}
              />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
