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
  const [consultaStatus , setConsultaStatus] = useState("");


  useEffect(() => {
    api.get(`/character/?name=${consulta}&status=${status}`)
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

  // filtro de status
  const updateConsultaStatus = e => {
    setStatus(e.target.value);
  } 

  const getConsultaStatus = e => {
    e.preventDefault();  
    setStatus(status);
    setConsultaStatus('');
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
        gstatus={getConsultaStatus} 
        status={consultaStatus} 
        uStatus={updateConsultaStatus}
      />
      <h1> valor status {status}</h1>
      
      <ContainerPersonagem>
        { personagem.map(per => (
          <Personagens key={`${per.id}`}>
            <Apidata
              nome={per.name}
              status={per.status}
              imagem={per.image}
              species={per.species}
              gender={per.gender}
              />
          </Personagens>
        ))
      }
      </ContainerPersonagem>

    </div>
  );
}

export default App;
