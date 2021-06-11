import React from 'react';
import './Filtro.css';

const Filtro = ({gstaus, uStatus}) => {
  return(
    <div className="containerFiltro">
      <div className="filtro">
          <select className="selecao" onChange={uStatus}>
            <option value={gstaus}>alive</option>
            <option value={gstaus}>dead</option>
            <option value={gstaus}>unknown</option>
          </select>
        </div>
    </div>
  );
}
export default Filtro;