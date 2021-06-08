import React, { useEffect, useState } from 'react';
import api from './service/api';
import GlobalStyled from './style/GlobalStyled';
import Header from './components/header/Header';
import Busca from './components/buscar/Busca';
import Filtro from './components/filtro/Filtro';
import Apidata from './data/Api-data';
import {
      ContainerPersonagem,
      Personagens
  } from './style/styleContainerPersonagens';

const App = () => {

  const [personagem, setPersonagem] = useState([]);
  const [busca, setBusca] = useState("");
  const [consulta, setConsulta] = useState('');

  const [status, setStatus] = useState('alive');
  const [buscaStatus , setBuscaStatus] = useState("");


  useEffect(() => {
    api.get(`/character/?name=${consulta}&status=${status}&limit=10`)
    .then(response => {
    setPersonagem(response.data.results)
    console.log(response.data)
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

  // filtro de busca
  const updateBuscaStatus = e => {
    setStatus(e.target.value);
  } 

  const getBuscaStatus = e => {
    e.preventDefault();  
    setStatus(status);
    setBuscaStatus('');
  }

  return (
    <div>
      <GlobalStyled/>
      <Header titulo="API - Rick and Morty"/>
      
      <Busca
        gBusca={getBusca} 
        vbusca={busca} 
        uBusca={updateBusca}
      />
      
      <Filtro 
        gstatus={getBuscaStatus} 
        status={buscaStatus} 
        uStatus={updateBuscaStatus}
      />
      <h1> valor status {status}</h1>
      
      <ContainerPersonagem>
        { personagem.map(per => (
          <Personagens key={`${per.id}`}>
            <Apidata
              nome={per.name}
              status={per.status}
              imagem={per.image}
              />
          </Personagens>
        ))
      }
      </ContainerPersonagem>

    </div>
  );
}

export default App;
