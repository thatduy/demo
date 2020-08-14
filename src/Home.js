import React from 'react';
import './App.css';
import SimpleMap from './SimpleMap';

const Home = (props) => {
return (
     <div className="App">
        <nav className="header">
          <div className="wraper-header">
            <div className="wrapper-menu-button-left">
              <button className="button-transparent">
                <img src={require('./menu-icon.png')} className="icon-menu" alt="menu"/>
              </button>
            </div>

            <div className="app-title">
              <h3>
                Minup PWA Demo
              </h3>
            </div>
            <div className="wrapper-menu-button-right">
              <button className="button-transparent">
                <img src={require('./filter-icon.png')} className="icon-menu" alt="menu"/>
              </button>
            </div>
          </div>
        </nav>
        
        <SimpleMap className="map" />

      </div> 
  )
};
export default Home;