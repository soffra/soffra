import React from 'react';

const TestimonialSlider = () => {
  return (
    <section id="testimonial-slider" class="testimonial-slider-section section-dark section">
      <div class="section-background">
        {/*<!-- IMAGE BACKGROUND -->*/}
        <div class="section-background-image parallax" data-stellar-ratio="0.4">
          <img src="img/backgrounds/testimonial-slider-bg.jpg" style={{opacity: 0.15}} />
        </div>
      </div>

      <div class="container">
        <h2 class="section-heading text-center hidden">Trusted by Thousands</h2>
        <div class="testimonial-slider-row row">
          <div class="col-md-8 col-md-offset-2">
            <ul class="testimonial-slider rslides" data-speed="800" data-timeout="4000" data-auto="false">

              {/* TESTIMONIAL ITEM 1 */}
              <li class="testimonial-slide">
                <span class="testimonial-ratings">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </span>
                <blockquote class="testimonial-quote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus dui, volutpat sed velit congue, pulvinar
                    tristique nisi. Maecenas mollis rutrum bibendum. Etiam mollis diam risus, at varius ex dapibus sed. In
                    in leo at sapien placerat sagittis.</p>
                </blockquote>
                <cite class="testimonial-cite">John Doe, Company Inc.</cite>
              </li>

              {/*<!-- TESTIMONIAL ITEM 2 -->*/}
              <li class="testimonial-slide">
                <span class="testimonial-ratings">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star-half-o"></span>
                </span>
                <blockquote class="testimonial-quote">
                  <p>Nulla lectus dui, volutpat sed velit congue, pulvinar tristique nisi. Maecenas mollis rutrum bibendum.
                    Etiam mollis diam risus, at varius ex dapibus sed. In in leo at sapien placerat sagittis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.</p>
                </blockquote>
                <cite class="testimonial-cite">Dohn Joe, Internet Marketer</cite>
              </li>

              {/*<!-- TESTIMONIAL ITEM 3 -->*/}
              <li class="testimonial-slide">
                <span class="testimonial-ratings">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </span>
                <blockquote class="testimonial-quote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus dui, volutpat sed velit congue, pulvinar
                    tristique nisi. Maecenas mollis rutrum bibendum. Etiam mollis diam risus, at varius ex dapibus sed. In
                    in leo at sapien placerat sagittis.</p>
                </blockquote>
                <cite class="testimonial-cite">John Doe, Company Inc.</cite>
              </li>

              {/*<!-- TESTIMONIAL ITEM 4 -->*/}
              <li class="testimonial-slide">
                <span class="testimonial-ratings">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star-half-o"></span>
                </span>
                <blockquote class="testimonial-quote">
                  <p>Nulla lectus dui, volutpat sed velit congue, pulvinar tristique nisi. Maecenas mollis rutrum bibendum.
                    Etiam mollis diam risus, at varius ex dapibus sed. In in leo at sapien placerat sagittis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.</p>
                </blockquote>
                <cite class="testimonial-cite">Dohn Joe, Internet Marketer</cite>
              </li>
            </ul>
          </div>
        </div>

        <div class="sponsors-row" data-animation="bounceIn">
          <img src="img/contents/sponsor-1a.png" alt="" />
          <img src="img/contents/sponsor-2a.png" alt="" />
          <img src="img/contents/sponsor-3a.png" alt="" />
          <img src="img/contents/sponsor-4a.png" alt="" />
        </div>

      </div>
    </section>
  );
}

export default TestimonialSlider;