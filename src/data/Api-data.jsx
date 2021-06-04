import React from 'react';
import './ApiData.css';

const Apidata = ({nome, status, imagem}) => {
  return(
    <div className="containerData">
      <h1 className="dataNome">{nome}</h1>
      <p className="dataStatus">{status}</p>
      <img className="dataImagem" src={imagem}  alt={nome} />
    </div>
  )
}

export default Apidata;