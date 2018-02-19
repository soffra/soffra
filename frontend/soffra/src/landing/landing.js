import React from 'react';
import Header from './header';
import Hero from './hero';
import Headline from './headline';
import Description from './description';
import HowItWorks from './howItWorks';
import Portfolio from './portfolio';
import Numbers from './numbers';
import Video from './video';
import ClimbAtlas from './climbAtlas';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Headline />
      <Description />
      <HowItWorks />
      <Portfolio />
      <Numbers />
      <Video />
      <ClimbAtlas />
    </div>
  );
};

export default Landing;