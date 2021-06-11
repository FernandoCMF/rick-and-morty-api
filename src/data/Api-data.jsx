import React from 'react';
import {
  ContainerData, 
  Imagem,
  ContainerSobre
} from '../style/styleData';

const Apidata = ({nome, status, imagem, species, gender}) => {
  return(
    <ContainerData>
      <Imagem src={imagem} alt={nome}/>
        <ContainerSobre>
          <h1>{nome}</h1>
          {status === 'Dead' ? <span style={{color:'#bf1600'}}>{status}</span> :
            <span style={{color:'#00bf33'}}>{status}</span>
          }
          <p>{species}</p>
          <p>{gender}</p>
        </ContainerSobre>
    </ContainerData>
  )
}

export default Apidata;