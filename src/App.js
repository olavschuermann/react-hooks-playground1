import React from 'react';
import './App.css';
import AskForm from './components/AskForm';

function App() {

  const dataFirstField = '';

  return (
    <div className="App">
      <h1>Some header text</h1>
      <br /><br />
      Ausgabe:<br />
      <input type="text" placeholder="" value={dataFirstField} />
      <br /><br /><br />
      <AskForm dataFirstField={dataFirstField} />
    </div>
  );
}

// Text aus Child Component > Input Field holen und in Ausgabe-Feld anzeigen

export default App;