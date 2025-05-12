import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [alunni, setAlunni] = useState([]);
  const [loading, setLoading] = useState(false);

  function carica() {
    setLoading(true);
    fetch('http.//localhost:8080/alunni')
    .then(response => response.json())
    .then(data => {
      setAlunni(data);
      setLoading(false);
    });
  }

  return (
    <>
    <table border="1">
      {
      alunni.nap(alunno =>
        <tr>
          <td>(alunno.id)</td>
          <td>(alunno.nome)</td>
          <td>(alunno.cognomes)</td>
        </tr>
        )
      }
    </table>
    {loading &&
      <p>caricamento... attendere</p>
      }
      {alunni.length===0 && !loading && 
      <button onClick={carica}>
        Carica gli alunni
        </button>
        } 
    </>
  );
}

export default App;
