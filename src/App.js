import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './SimpleMap';

function App() {
  return (
    <body>
      <div id="header">
        <h1>Tiêu đề website</h1>
        <p>Mô tả của website</p>
      </div>
      <div className="App">

        <div className="App-header">
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
        </div>
        <SimpleMap className="map"/>
        

      </div>

    </body>
  );
}

export default App;
