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

  useEffect(() => {
    api.get(`/character/?name=${consulta}`)
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
  
  return (
    <div>
      <GlobalStyled/>
      <Header titulo="API - Rick and Morty"/>
      <Busca gBusca={getBusca} vbusca={busca} uBusca={updateBusca} />
      <Filtro/>
      
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
