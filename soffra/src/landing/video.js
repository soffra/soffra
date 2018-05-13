import React from 'react';

const Video = () => {
  return (
    <section id="video" class="video-section section-gray section">
      <div class="container">
        <h2 class="section-heading text-center">Watch the Video</h2>
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="video-embed">
              {/* VIDEO EMBED FROM VIMEO */}
              <iframe class="video-async" data-source="vimeo" data-video="115134273" data-color="f3ae73" allowfullscreen></iframe>
              {/* VIDEO EMBED FROM YOUTUBE */}
              {/* <iframe class="video-async" data-source="youtube" data-video="7UAy8E3e9f8" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;