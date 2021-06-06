import React from 'react';
import {
  ContainerData, 
  Imagem,
  ContainerSobre
} from '../style/styleData';

const Apidata = ({nome, status, imagem}) => {
  return(
    <ContainerData>
      <Imagem src={imagem} alt={nome}/>
        <ContainerSobre>
          <h1>{nome}</h1>
          <p>{status}</p>
        </ContainerSobre>
    </ContainerData>
  )
}

export default Apidata;