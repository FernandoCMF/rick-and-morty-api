import React from 'react'

const Busca = ({gBusca, vbusca, uBusca}) => {
  return(
    <>
      <form className="form-busca" onSubmit={gBusca}>
          <input 
          className="form-input"
          value={vbusca}
          type="text"
          onChange={uBusca}
          placeholder="Informe um nome." 
          />
          <button className="form-btn">Buscar</button>
        </form>
    </>
  );
}

export default Busca;

