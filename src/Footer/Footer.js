import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <h1 className="footer-title">My react app for IT CLUSTER ACADEMY 2020</h1>
              <p>All Rghts Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
   );
  }
}

export default Footer;
