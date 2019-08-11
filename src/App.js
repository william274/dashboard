import React from 'react';
import logo from './logo.svg';
import Title from './Title';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testando React, Git e NodeJS.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title value='Título adicionado através de componente.'></Title>
        <Title value='Novo título'></Title>
      </header>
    </div>
  );
}

export default App;
