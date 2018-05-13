import React from 'react';

const Explore = () => {
  return (
    <section id="climbatlas" class="two-cols-description-section section-accent section">
      <div class="container-fluid two-cols-description-row">
        {/* CLIMB ATLAS DESCRIPTION TEXT */}
        <div class="two-cols-description-text" data-animation="fadeInLeft">
          <div class="two-cols-description-text-inner">
            <div class="two_col_logo">
              <img src="img/climbAtlas-logo-2col.png" />
            </div>
            <h2 class="section-heading text-left">Two Columns Section</h2>
            <p>You can put image / video embed in the column to the right. If you like, you can also swap the columns, which means this text column will be on the right hand side, while the image column is on the left. While on this column, you may want to put some description paragraphs or a nice list like below:</p>
            <ul class="nice-list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed feugiat arcu ut orci porta, eget porttitor felis suscipit.</li>
              <li>Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</li>
            </ul>
            <div class="climbatlas-buttons"><a href="climbatlas.html" class="btn btn-lg btn-primary">Explore</a></div>
          </div>
        </div>
        {/* TWO COLS DESCRIPTION IMAGE */}
        <div class="two-cols-description-image" data-animation="fadeInRight">
          <img src="img/backgrounds/two-cols-description-bg.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Explore;