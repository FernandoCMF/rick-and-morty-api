import React from 'react';
import Apidata from '../../data/Api-data';
import {
  Personagens,
  ContainerPersonagem
  } from '../../style/styleContainerPersonagens'

const ListaPersonagens = ({personagem}) => {
  return(
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
  ) 
}

export default ListaPersonagens;