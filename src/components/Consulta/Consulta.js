import React, {useState,  useEffect} from 'react';
import ListaPersonagens from '../lista/Lista';
import api from '../../service/api';
import Busca from '../Form/FormBusca/Busca';
import Filtro from '../Form/FormFiltro/Filtro';

const Consulta = () => {
  const [personagens, setPersongens]  = useState([]);
  const [busca, setBusca] = useState("");
  const [consulta, setConsulta] = useState('');

  const [status, setStatus] = useState('alive');
  const [consultaStatus , setConsultaStatus] = useState("");


  useEffect(() => {
    api.get(`/character/?name=${consulta}&status=${status}`)
    .then(response => {
    setPersongens(response.data.results)
    console.log(response.data)
    }).catch(err => console.log(err))
  
},[consulta])


  const updateBusca = e => {
    setBusca(e.target.value);
  }

  const getBusca = e => {
    e.preventDefault();
    setConsulta(busca);
    setBusca('');
    
  }

  // filtro de status
  const updateConsultaStatus = e => {
    setStatus(e.target.value);
  } 

  const getConsultaStatus = e => {
    e.preventDefault();  
    setStatus(status);
    setConsultaStatus('');
  }


  return(
    <div>
       <Busca
        gBusca={getBusca} 
        vbusca={busca} 
        uBusca={updateBusca}
      />
      
      <Filtro 
        gstatus={getConsultaStatus} 
        status={consultaStatus} 
        uStatus={updateConsultaStatus}
      />

    <ListaPersonagens personagem={personagens}/>
    </div>

  )
}

export default Consulta;