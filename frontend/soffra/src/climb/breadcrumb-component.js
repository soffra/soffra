import React from 'react';

export default class Breadcrumb extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-12 breadCrumb-container">
          <div class="breadCrumb-inner">
            <a href="earth.php"><div class="breadCrumb-select breadCrumb-atlas" title="Back to World Atlas">World Atlas</div></a>
            <a href="usa.php"><div class="breadCrumb-select breadCrumb-country" title="Back to United States">United States</div></a>
            <a href="NVnevada.php"><div class="breadCrumb-select breadCrumb-state" title="Back to Nevada">Nevada


                    	<div class="breadcrumb_pointer_climb"></div>



            </div></a>
            <div class="shareMain-Container">


              <div class="shareMain-text" title="Share this climb:"><i class="fa fa-share-alt" aria-hidden="true"></i>Share this climb:</div>

              <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a class="a2a_button_twitter" title="Share on Twitter!"></a>
                <a class="a2a_button_facebook" title="Share on Facebook!"></a>
              </div>
              <script async src="https://static.addtoany.com/menu/page.js"></script>
            </div>
          </div>
        </div>
      </div>
    );
  }
}