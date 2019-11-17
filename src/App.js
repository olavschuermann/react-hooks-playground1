import React from 'react';
import './App.css';
import AskForm from './components/AskForm';

function App() {

  const getDataFirstField = e => {
    // e.preventDefault();
    // setFirstInput(e.target.value);
    // dataFirstField = firstInput;
    // return dataFirstField;
}

  return (
    <div className="App">
      <h1>Some header text</h1>
      <br /><br />
      Ausgabe:<br />
      <input type="text" placeholder="" value={getDataFirstField} />
      <br /><br /><br />
      <AskForm getDataFirstField={getDataFirstField} />
    </div>
  );
}

// Text aus Child Component > Input Field holen und in Ausgabe-Feld anzeigen

export default App;