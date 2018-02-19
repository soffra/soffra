import React from 'react';

const Portfolio = () => {
  return (
    <section id="featured_climbs" class="portfolio-section section">
      <div class="container-fluid">
        <h2 class="section-heading text-center">FEATURED CLIMBS</h2>
        <div class="portfolio-row row">
          
          {/* PORTFOLIO - ITEM 1 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-1.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Mount Washington</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO - ITEM 2 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-2.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Col Du Tourmalet</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          <div class="hidden-md hidden-lg clear"></div>

          {/* PORTFOLIO - ITEM 3 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-3.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Passo Di Stelvio</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO - ITEM 4 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-4.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Pike's Peak</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          <div class="clear"></div>

          {/* PORTFOLIO - ITEM 5 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-5.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Mount Mitchell</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO - ITEM 6 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-6.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Passo di Gavia</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          <div class="hidden-md hidden-lg clear"></div>

          {/* PORTFOLIO - ITEM 7 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-7.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Col d'Izoard</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO - ITEM 8 */}
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="portfolio-item">
              <img class="portfolio-item-picture" src="img/contents/portfolio-item-8.jpg" alt="" />
              <div class="portfolio-item-overlay"></div>
              <div class="portfolio-item-text">
                <h4 class="portfolio-item-title">Col Du Galibier</h4>
                <p class="portfolio-item-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;