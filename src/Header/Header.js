import React from 'react';
import './Header.css';


class Header extends React.Component {
  
  render() {
  return (
      <header className="App-header">
        <div className="container">
          <h1 className="site-title">React Exchange</h1>
        </div>
      </header>
  );
  }
}

export default Header;
