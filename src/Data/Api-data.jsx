import React from 'react';

const Apidata = ({nome, status, imagem}) => {
  return(
    <div className="containerData">
      <h1 className="dataNome">{nome}</h1>
      <span className="dataStatus">{status}</span>
      <img className="dataImagem" src={imagem}  alt={nome} />
    </div>
  )
}

export default Apidata;