import "./App.css";
import { useState } from "react";
function App() {
  const [alunni, setAlunni] = useState([]);

  const [loading, setLoading] = useState(false);
  const [inserimento, setInserimento] = useState(false);

  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [elimina, setElimina] = useState('false');


  function carica() {
    setLoading(true);
    fetch("http://localhost:8080/alunni")
      .then((response) => response.json())
      .then((data) => {
        setAlunni(data);
        setLoading(false);
      });
  }

  function salvaAlunno(){
    setInserimento(false);
    setLoading(true);
    fetch("http://localhost:8080/alunni", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({nome: nome, cognome: cognome})
    })
      .then((response) => response.json())
      .then((data) => {
        carica();
      });
  }

  return (
    <div className="App">
      {alunni.length > 0 && (
        <>
          <table className="Tabella">
            {alunni.map((alunno) => (
              <tr>
                <td>{alunno.id}</td>
                <td>{alunno.nome}</td>
                <td>{alunno.cognome}</td>
              </tr>
            ))}
          </table>
          {!inserimento && (
            <button className="Bottone" onClick={() => setInserimento(true)}>
              inserisci alunno
            </button>
          )}
          {inserimento && (
            <div>
              Nome: <input onChange={(e)=> setNome(e.target.value) } type="text" id="nome" /><br></br>
              Cognome: <input onChange={(e)=> setCognome(e.target.value) } type="text" id="cognome" /><br></br>
              <button className="Bottone" onClick={salvaAlunno}>Salva</button>
              <button className="Bottone" onClick={() => setInserimento(false)}>
                Annulla
              </button>
            </div>
          )}
        </>
      )}

      {loading && <p>caricamento</p>}
      {alunni.length === 0 && !loading && (
        <button className="Bottone" onClick={carica}>
          Carica Alunni
        </button>
      )}
    </div>
  );
}

export default App;
