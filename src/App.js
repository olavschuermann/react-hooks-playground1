import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Some header text</h1>
      <form>
        <input type="text" name="First question to ask" /><br />
        <input type="text" name="Second question to ask" /><br />
        <input type="text" name="Third question to ask" /><br />
        <input type="submit" value="Absenden" />
      </form>
    </div>
  );
}

export default App;