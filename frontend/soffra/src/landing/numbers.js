import React from 'react';

const Numbers = () => {
  return (
    <section id="numbers" class="numbers-section section-dark section">

      <div class="section-background">

        {/* IMAGE BACKGROUND */}
        <div class="section-background-image parallax" data-stellar-ratio="0.4">
          <img src="img/backgrounds/numbers_bg.jpg" style={{ opacity: '0.5' }} alt="numbers background" />
        </div>

      </div>

      <div class="container">

        <h2 class="section-heading text-center">At last count...</h2>
        <p class="section-subtitle">We love the data as much as you do. Here is <span>SOFFRA</span> by the numbers: </p>

        <div class="numbers-row row">

          {/* NUMBERS - ITEM 1 */}
          <div class="col-sm-6 col-md-3">
            <div class="numbers-item">
              <div class="numbers-item-counter"><span class="counter-up">538</span></div>
              <div class="numbers-item-caption">Number Of Climbs</div>
            </div>
          </div>

          {/* NUMBERS - ITEM 2 */}
          <div class="col-sm-6 col-md-3">
            <div class="numbers-item">
              <div class="numbers-item-counter"><span class="counter-up">1425489</span>ft</div>
              <div class="numbers-item-caption">Total Elevation Gain</div>
            </div>
          </div>

          {/* NUMBERS - ITEM 3 */}
          <div class="col-sm-6 col-md-3">
            <div class="numbers-item">
              <div class="numbers-item-counter"><span class="counter-up">5240</span>mi</div>
              <div class="numbers-item-caption">Total Distance</div>
            </div>
          </div>

          {/* NUMBERS - ITEM 4 */}
          <div class="col-sm-6 col-md-3">
            <div class="numbers-item">
              <div class="numbers-item-counter"><span class="counter-up">55</span> <span class="fa fa-globe"></span></div>
              <div class="numbers-item-caption">Countries Worldwide</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Numbers;