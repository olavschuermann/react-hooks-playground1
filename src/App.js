import React from 'react';
import './App.css';
import AskForm from './components/AskForm';

function App() {

  let dataFirstField = '';

  const getDataFirstField = (data) => {
    // e.preventDefault();
    console.log('Daten in Parent (data): ' + data);
    // Übergabe von Input aus Child nach Parent funktioniert
    // nun: wie bekomme ich das in das Ausgabefeld?
    dataFirstField = data;
}

  return (
    <div className="App">
      <h1>Some header text</h1>
      <br /><br />
      Ausgabe:<br />
      <input type="text" placeholder="" value={dataFirstField} />
      <br /><br /><br />
      <AskForm getDataFirstField={getDataFirstField} />
    </div>
  );
}

// Text aus Child Component > Input Field holen und in Ausgabe-Feld anzeigen

export default App;