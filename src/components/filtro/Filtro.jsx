import React from 'react';
import './Filtro.css';

const Filtro = () => {
  return(
    <div className="containerFiltro">
      <div className="filtro">
          <select className="selecao">
            <option defaultValue value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
            <option value="Unknown">Unknown</option>
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