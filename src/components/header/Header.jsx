import React from 'react';
import './Header.css';

export default props => {
  return(
      <header className="container-titulo">
        <div className="titulo">{props.titulo}</div>
      </header>
  );
}
