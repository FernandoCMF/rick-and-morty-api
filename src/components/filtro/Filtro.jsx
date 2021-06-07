import React from 'react';
import './Filtro.css';

const Filtro = ({gstaus, uStatus}) => {
  return(
    <div className="containerFiltro">
      <div className="filtro">
          <select className="selecao" onChange={uStatus}>
            <option defaultValue value={gstaus}>alive</option>
            <option value={gstaus}>dead</option>
            <option value={gstaus}>unknown</option>
          </select>
        </div>
        <div className="filtro">
          <select className="selecao">
            <option defaultValue value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Mythoplogical">Mythological Creature</option>
            <option value="Animal">Animal</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Poopybutthole">Poopybutthole</option>
          </select>
      </div>
    </div>
  );
}
export default Filtro;