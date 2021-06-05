import React from 'react';
import {
  ContainerData, 
  DataNome, 
  Imagem,
  DataStatus,
  ContainerSobre
} from '../style/styleData/styleData';

const Apidata = ({nome, status, imagem}) => {
  return(
    <ContainerData>
      <Imagem src={imagem} alt={nome}/>
        <ContainerSobre>
          <DataNome>{nome}</DataNome>
          <DataStatus>{status}</DataStatus>
        </ContainerSobre>
    </ContainerData>
  )
}

export default Apidata;