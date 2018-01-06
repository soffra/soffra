import React from 'react';

const Header = () => (
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand main_logo" href="index.html"></a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="about.php">About SOFFRA</a></li>
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