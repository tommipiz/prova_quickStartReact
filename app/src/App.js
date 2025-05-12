import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const [alunni,setAlunni] = useState([]);

function App() {
  const alunni = [{
    "id": "1",
    "nome": "tommaso",
    "cognome": "pizzutilo"
  },
  {
    "id": "1",
    "nome": "cosimo",
    "cognome": "ballerino"
  }
  ];

  function carica() {
    setAlunni(alunni);
  }

  return (
    <table>
      


    </table>
  )
}

export default App;
