import React, { useState } from 'react';
import './App.css';
import AskForm from './components/AskForm';

function App() {

  const [ dataFirstField, setDataFirstField ] = useState('');

  const getDataFirstField = (data) => {
    // e.preventDefault();
    console.log('Daten in Parent (data): ' + data);
    setDataFirstField(data);
}

  return (
    <div className="App">
      <h1>Some header text</h1>
      <br /><br />
      Ausgabe:<br />
      <input type="text" placeholder="Nix drin" value={dataFirstField} readOnly />
      <br /><br /><br />
      <AskForm getDataFirstField={getDataFirstField} />
    </div>
  );
}

export default App;