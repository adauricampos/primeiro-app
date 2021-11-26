import {useState} from 'react';

import Nome from './Components/Nome'

function App(){
  const [aluno, setAluno] = useState('Dev-Ninja') 

  function handleChangeName(nome){
    setAluno(nome);
  }
  return (
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Adauri Campos')}>
         Mudar Nome
      </button>
      
    </div>

  );
}

export default App;
