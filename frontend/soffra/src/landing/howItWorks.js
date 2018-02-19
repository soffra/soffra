import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" class="how-it-works-section section">
      <div class="container-fluid">
        <h2 class="section-heading text-center">How it Works</h2>
        <div class="hiw-row row">
          {/* HOW IT WORKS - ITEM 1 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item">
              <img class="hiw-item-picture" src="img/contents/hiw-item-1.jpg" alt="" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">1</span>
                <h4 class="hiw-item-title">Get out and ride</h4>
                <p class="hiw-item-description">Get out there and attack your favorite climb. We are adding new climbs everyday, so chances are, there is one or two in your neck of the woods. </p>
              </div>
            </div>
          </div>
          {/* HOW IT WORKS - ITEM 2 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item even">
              <img class="hiw-item-picture" src="img/contents/hiw-item-2.jpg" alt="" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">2</span>
                <h4 class="hiw-item-title">Upload to Strava</h4>
                <p class="hiw-item-description">Upload your ride to your Strava profile as normal. SOFFRA will detect the climbs that were completed and automatically update your profile climb checklist.</p>
              </div>
            </div>
          </div>
          <div class="hidden-md hidden-lg clear"></div>
          {/* HOW IT WORKS - ITEM 3 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item">
              <img class="hiw-item-picture" src="img/contents/hiw-item-3.jpg" alt="" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">3</span>
                <h4 class="hiw-item-title">View your accomplishments</h4>
                <p class="hiw-item-description">View your checklist, analyze your data &amp; interact with athletes. You can also visit the individual climbs to view stats, maps, charts and video so you can plan your next attack.</p>
              </div>
            </div>
          </div>
          {/* HOW IT WORKS - ITEM 4 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item even">
              <img class="hiw-item-picture" src="img/contents/hiw-item-4.jpg" alt="" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">4</span>
                <h4 class="hiw-item-title">Repeat</h4>
                <p class="hiw-item-description">Climbing mountains on your bicycle is difficult but fun... go get some more!.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;