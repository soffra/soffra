import React from 'react';

const Description = () => {
  return (
    <section id="about" class="about-section section">
      <div class="container">
        <h2 class="section-heading text-center">APPLICATION FEATURES</h2>
        <div class="row featurette main_icon1">
          <div class="col-md-3 icon1_mobile">
            <img src="img/view_oneoff_icon.png" class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="View One-off, Gap, Pass or Notch Climbs" />
          </div>
          <div class="col-md-9">
            <div class="featurette-heading">View One-off, Gap, Pass Or Notch Climbs</div>
            <p class="lead">Find one-off, gap, pass or notch climbs by searching
                              any criteria that pertains to the climb such as grade, terrain distance or location. </p>
          </div>
          <div class="col-md-3 icon1_desktop">
            <img src="img/view_oneoff_icon.png" class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="AvPro Aerial Advertising: Family Owned and Operated... Since 1978" />
          </div>
        </div>
        <div class="row featurette main_icon2">
          <div class="col-md-3">
            <img src="img/analyze_stats_icon.png" class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="AvPro Aerial Advertising: Family Owned and Operated... Since 1978" />
          </div>
          <div class="col-md-9">
            <div class="featurette-heading">Analyze Stats, Maps, Charts &amp; Video</div>
            <p class="lead">View terrain maps powered by Google, elevation and gradient charts, climbs statistics and video as well as details about the region, how to get there and everything else that you need to know to plan your next attack.</p>
          </div>
        </div>
        <div class="row featurette main_icon3">
          <div class="col-md-3 icon3_mobile">
            <img src="img/view_comparisons_icon.png" class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="AvPro Aerial Advertising: Family Owned and Operated... Since 1978" />
          </div>
          <div class="col-md-9">
            <div class="featurette-heading">Visualize Climbs In Three Dimensions</div>
            <p class="lead">Zoom in, rotate and fly around your favorite climb with 3D Terrain and Topographic maps built with ArcGIS mapping software.</p>
          </div>
          <div class="col-md-3 icon3_desktop">
            <img src="img/view_comparisons_icon.png" class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="AvPro Aerial Advertising: Family Owned and Operated... Since 1978" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;