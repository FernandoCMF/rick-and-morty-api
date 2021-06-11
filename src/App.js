import React from 'react';
import GlobalStyled from './style/GlobalStyled';
import Header from './components/header/Header';
import Consulta from './components/Consulta/Consulta';

const App = () => {
  return (
    <div>
      <GlobalStyled/>
      <Header titulo="API - Rick and Morty"/>
      <Consulta/>
    </div>
  );
}

export default App;
