import React from 'react';

export default class ClimbTitle extends React.Component {
  render() {
    return (
      <div class="row row2">
        <div class="col-lg-12 text-center">
          <div class="col-lg-12 text-center title_inner">
            <div class="col-lg-2 text-center state_icon  state_icon_nevada1"></div>
            <div class="col-lg-8 text-center climb_title_approach" title="Winnemucca Mountain | Winnemucca, Nevada | Winnemucca Mountain Road">
              <div class="col-lg-2 text-center climb_mainTitle climb_mainTitle_mtwashington ">Winnemucca Mountain</div>
              <div class="col-lg-2 text-center climb_cityState">Winnemucca, Nevada</div>
              <div class="col-lg-2 text-left climb_approach_longest2">Winnemucca Mountain Road</div><div class="arrow-left_approach"></div>
            </div>
          </div>

          <!-- /Climb Title - Mobile -->



       	<!-- CSS Mountain-Cloud image - Desktop -->

                <div class="col-lg-12 text-center title_inner_mountain">
            <div class="col-lg-2 sun mountain-sun"></div>
            <div class="col-lg-3 mountain arrow-up1"></div>
            <div class="col-lg-6 mountain arrow-up2"></div>
            <div class="col-lg-3 mountain arrow-up3"></div>
            <div class="col-lg-3 mountain arrow-up4"></div>
            <div class="col-lg-3 mountain arrow-up5"></div>
            <div class="col-lg-3 cloud cloud-box">
              <div class="col-lg-3 cloud-inner cloud-inner1"></div>
              <div class="col-lg-3 cloud-inner cloud-inner2"></div>
              <div class="col-lg-3 cloud-inner cloud-inner3"></div>
            </div>
            <div class="col-lg-3 cloud cloud-box2">
              <div class="col-lg-3 cloud-inner cloud-inner21"></div>
              <div class="col-lg-3 cloud-inner cloud-inner22"></div>
              <div class="col-lg-3 cloud-inner cloud-inner23"></div>
            </div>

          </div>


          <!-- /CSS Mountain-Cloud image - Desktop -->





        <!-- Mountain Icon - Strava Icon - Elevation Scale Mobile -->


                    <button type="button" id="mountain-icon" class="btn btn-primary btn-xs more_options mountain_icon" data-toggle="offcanvas" title="More Nevada Climbs..." onclick="$('.rotate').toggleClass('rotated', 'rotated-reset');"></button>
          <div class="elevationScale_mobile event_reg"><span class="plus_2500">+ 2,500 <span class="mobile_ft">ft.</span></span><a href="#stravaLeaderBoard"><span class="breg" title="Go To Strava Segment and Leader Board"></span></a></div>


          <!-- /Mountain Icon - Strava Icon - Elevation Scale Mobile -->




        <!-- Elevation Scale -->

        <div class="event_reg2"><div class="row scale_wrapper">
            <div class="scale_inner">
              <div class="row">

                <div data-container="body" data-toggle="tooltip" data-placement="top" data-animation="fade" title="+5,000 FEET: Climbs that realize 5,000 ft. (1524 m) or more of elevation gain." data-original-title="" class="col-md-2 el_5000">
                  <div class="row5000">+5,000<span class="elscale_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark"><span class="elscale_circle5000"></span></div>
                  </div>
                  <div class="arrow-right-elscale"></div><!--Arrows for the right end of the scale-->
                    	<div class="arrow-right-elscale_inverse"></div>
                </div>


                <div data-container="body" data-toggle="tooltip" data-placement="top" data-animation="fade" title="+2,500 FEET: Climbs that realize 2,500 ft. (762 m) to 4,999 ft. (1523.6 m) of elevation gain." data-original-title="" class="col-md-2 el_2500" >
                  <div class="row2500">+2,500<span class="elscale_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark_right"><div class="tick_mark_right_circle"></div>
                    </div>
                    <div class="tick_mark"><span class="elscale_circle2500"></span></div>
                  </div>
                </div>


                <div class="col-md-2 el_2000 el_2000_fix">
                  <div class="row2000 elscale_hilite" style="color:#CACA00;">+2,000<span class="elscale_hilite_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark_right"><div class="tick_mark_right_circle"></div>
                    </div>
                    <div class="elscale_arrow-down"></div>
                  </div>
                </div>

                <div data-container="body" data-toggle="tooltip" data-placement="top" data-animation="fade" title="+1,500 FEET: Climbs that realize 1,500 ft. (457.2 m) to 1,999 ft. (609.2 m) of elevation gain." data-original-title="" class="col-md-2 el_1500">
                  <div class="row1500">+1,500<span class="elscale_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark_right"><div class="tick_mark_right_circle"></div>
                    </div>
                    <div class="tick_mark"><span class="elscale_circle1500"></span></div>
                  </div>
                </div>

                <div data-container="body" data-toggle="tooltip" data-placement="top" data-animation="fade" title="+1,000 FEET: Climbs that realize 1,000 ft. (304.8 m) to 1,499 ft. (456.8 m) of elevation gain." data-original-title="" class="col-md-2 el_1000">
                  <div class="row1000">+1,000<span class="elscale_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark_right"><div class="tick_mark_right_circle"></div>
                    </div>
                    <div class="tick_mark"><span class="elscale_circle1000" title="+1,000 ft. of Elevation Gain"></span></div>
                  </div>
                </div>

                <div data-container="body" data-toggle="tooltip" data-placement="top" data-animation="fade" title="+500 FEET: Climbs that realize 500 ft. (152.4 m) to 999 ft. (304.4 m) of elevation gain." data-original-title="" class="col-md-2 el_500">
                  <div class="row500">+500<span class="elscale_hilite_ft">ft</span></div>
                  <div class="row">
                    <div class="tick_mark_right"><div class="tick_mark_right_circle"></div>
                    </div>
                    <div class="tick_mark"><span class="elscale_circle500"></span></div>
                  </div>
                  <div class="arrow-left-elscale"></div><!--Arrows for the left end of the scale-->
                		<div class="arrow-left-elscale_inverse"></div>
                </div>
              </div>
            </div>
            );
    }
}