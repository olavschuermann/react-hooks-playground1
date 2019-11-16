import React from 'react';
import './App.css';
import AskForm from './components/AskForm';

function App() {
  return (
    <div className="App">
      <h1>Some header text</h1>
      <br /><br />
      Ausgabe:<br />
      <input type="text" placeholder="" />
      <br /><br /><br />
      <AskForm />
    </div>
  );
}

// Text aus Child Component > Input Field holen und in Ausgabe-Feld anzeigen

export default App;