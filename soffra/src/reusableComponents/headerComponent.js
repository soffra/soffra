import React from 'react';

const Header = () => (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand main_logo" href="index.html"></a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="about.php">About SOFFRA</a></li>
            <li><a href="earth.php">Climb Atlas</a></li>
            <li><a href="team.php">Team</a></li>
            <li><a href="shop.php">Shop</a></li>
            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Header;