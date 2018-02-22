import React from 'react';

const Footer = () => (
  <footer className="row row10">

    <div className="col-lg-12 text-center footer">
      <div className="container">
        <a href="index.html"><div className="footer_logo"></div></a>
        <p className="signoff">© Copyright 2017 SOFFRA, Inc. | All rights reserved.</p>


        <div className="col-lg-12 text-center footernav_wrapper">
          <div className="footernav_section col-md-4">
            <h2 className="footernav_sectionheading">Explore</h2>
            <ul>
              <a href="https://soffra.org/about.php"><li>About SOFFRA</li></a>
              <a href="https://soffra.org/earth.php"><li>Climb Atlas</li></a>
              <a href="https://soffra.org/team.php"><li>Team</li></a>
              <a href="https://soffra.org/shop.php"><li>Shop</li></a>
              <a href="https://soffra.org/contact.php"><li>Contact</li></a>
            </ul>
          </div>

          <div className="footernav_section col-md-4">
            <h2 className="footernav_sectionheading">Follow</h2>
            <ul>
              <a href="#"><li>Strava</li></a>
              <a href="#"><li>Twitter</li></a>
              <a href="#"><li>Instagram</li></a>
              <a href="#"><li>Facebook</li></a>
            </ul>
          </div>

          <div className="footernav_section col-md-4">
            <h2 className="footernav_sectionheading">More</h2>
            <ul>
              <a href="https://soffra.org/ads.php"><li>Advertise</li></a>
              <a href="https://soffra.org/local.php"><li>Local</li></a>
              <a href="https://soffra.org/support.php"><li>Support</li></a>
              <a href="https://soffra.org/mission.php"><li>Mission</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer >
);

export default Footer;