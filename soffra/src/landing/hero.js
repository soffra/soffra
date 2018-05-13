import React from 'react';

const Hero = () => {
  return (
    <section id="hero" class="hero-section hero-layout-simple hero-fullscreen section section-dark">
      <div class="section-background">
        {/* IMAGE BACKGROUND */}
        <div class="section-background-image parallax" data-stellar-ratio="0.4">
          <img src="img/backgrounds/main_banner.jpg" alt="" style={{opacity: '0.85'}} />
        </div>
        {/* VIDEO BACKGROUND */}
        {/* <div class="section-background-video section-background-dot-overlay parallax" data-stellar-ratio="0.4">
						<video preload="auto" autoplay loop muted poster="images/backgrounds/video-fallback-bg.jpg" style="opacity: 0.3;">
							<source type="video/mp4" src="videos/video-bg.mp4">
							<source type="video/ogg" src="videos/video-bg.ogv">
							<source type="video/webm" src="videos/video-bg.webm">
						</video>
					</div>  */}
        {/* SLIDESHOW BACKGROUND */}
        {/* <ul class="section-background-slideshow parallax" data-stellar-ratio="0.4" data-speed="800" data-timeout="4000">
						<li><img src="images/backgrounds/hero-bg-slideshow-1.jpg" alt="" style="opacity: 0.25;"></li>
						<li><img src="images/backgrounds/hero-bg-slideshow-2.jpg" alt="" style="opacity: 0.25;"></li>
						<li><img src="images/backgrounds/hero-bg-slideshow-3.jpg" alt="" style="opacity: 0.2;"></li>
					</ul> */}
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-content-inner">
            <div class="row main_banner">
              <div class="main_banner_inner">
                <div class="tagline_search">Plan Your Next Attack:</div>
                <form name=" search" action="results.html" method="get">
                  <div class="input_container">
                    <input type="text" name="searchTxt" placeholder="Ascutney; 7%; Vermont; NH; Cat 3; HC..." id="main_search" class="input input_index" />
                    <input type="button" id="clearField" class="clear_form" name="clear" value="&times;" onclick="resetform()" />
                  </div>
                  <input type="submit" value="&#xf002;" name="search" class="btn btn-default" />
                </form>
                <p>... Or Go Straight To The:</p>
                <a href="climbatlas.html" title="Go straight to the Climb Atlas..."><button class="btn btn-default climbatlas_mainbutton"><div class="atlas_heading_indexButton"></div></button></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;