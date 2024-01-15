import React, { useEffect } from 'react';

import HomeHero from '../components/HomeHero';
import HomeAnalytics from '../components/HomeAnalytics';
import HomeFooter from '../components/HomeFooter';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAnalytics />
      <HomeFooter />
    </>
  )
}

export default Home
