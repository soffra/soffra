import React from 'react';

const Header = () => {
  return (
    <header id="header" class="header-section section section-dark navbar navbar-fixed-top">
      <div class="container container-fluid">
        <div class="navbar-header navbar-left">

          {/* RESPONSIVE MENU BUTTON */}
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          {/* HEADER LOGO */}
          <a class="navbar-logo navbar-brand" href="index.html">
            <img src="img/logos/header-logos.png" srcset="img/logos/header-logo@2x.png 2x" alt="SOFFRA | Plan Your Next Attack" />
          </a>

        </div>

        <nav id="navigation" class="navigation navbar-collapse collapse navbar-right">

          {/* NAVIGATION LINKS */}
          <ul id="header-nav" class="nav navbar-nav">

            <li><a href="#hero" class="hidden">Top</a></li>

            <li><a href="#about">APPLICATION FEATURES</a></li>
            <li><a href="#how-it-works">HOW IT WORKS</a></li>
            <li><a href="#featured_climbs">FEATURED CLIMBS</a></li>
            <li><a href="#climbatlas">CLIMB ATLAS</a></li>

            {/* DROPDOWN MENU */}
            <li class="dropdown dropdown-hover">
              <a href="#" class="dropdown-toggle external" data-toggle="dropdown" role="button" aria-expanded="false">More <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#video" class="anchor-link external">Watch the Video</a></li>
                <li><a href="#numbers" class="anchor-link external">SOFFRA BY THE NUMBERS</a></li>
                <li><a href="#testimonial" class="anchor-link external">Testimonial</a></li>
                <li><a href="#faq" class="anchor-link external">FAQ</a></li>
                <li><a href="#maps" class="anchor-link external">Contact Us</a></li>
              </ul>
            </li>

            {/* HEADER ACTION BUTTON */}
            <li class="header-action-button"><a href="closing" class="btn btn-primary">Sign-up</a></li>
            <li class="login_container"><a href="#" class="login">Log In</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;