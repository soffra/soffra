import React from 'react';

const Closing = () => {
    return(
        <section id="closing" class="closing-section section-dark section">

      <div class="section-background">

        {/*<!-- IMAGE BACKGROUND -->*/}
        <div class="section-background-image parallax" data-stellar-ratio="0.4">
          <img src="img/backgrounds/closing-bg.jpg" alt="" style={{opacity: 0.15}} />
        </div>

      </div>

      <div class="container">

        <div class="cta_headline_icon"></div>
        <h3 class="closing-shout">Ready to start suffering? Take the first step by clicking the button below</h3>

        <div class="closing-buttons" data-animation="tada"><a href="#hero" class="anchor-link btn btn-lg btn-primary">Sign-up</a></div>

      </div>

    </section>
    );
}

export default Closing;