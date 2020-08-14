import React from 'react';
const Gaccha = (props) => {
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
        <h1>Gaccha is coming</h1>
      </div> 
  )
};
export default Gaccha;