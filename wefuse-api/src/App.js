import React from 'react';
import logo from './assets/img/logo-neurox2.png';
import './App.css';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function hamMenuFunction(x) {
  x.classList.toggle("change");
  $('nav').toggleClass('nav-open');
}

export default App;
