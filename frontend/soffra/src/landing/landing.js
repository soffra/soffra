import React from 'react';
import Header from './header';
import Hero from './hero';
import Headline from './headline';
import Description from './description';
import HowItWorks from './howItWorks';
import Portfolio from './portfolio';
import Numbers from './numbers';
import Video from './video';
import Explore from './explore';
import TestimonialSlider from './testimonialSlider';
import FAQ from './faq';
import Closing from './closing';
import Footer from '../reusableComponents/footerComponent';

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
      <Explore />
      <TestimonialSlider />
      <FAQ />
      <Closing />
      <Footer />
    </div>
  );
};

export default Landing;