import React from 'react';

import TimeLine from './TimeLine';
import Skills from './Skills';
import LongFooter from '../layouts/LongFooter';

import "../assets/scss/components/Home.scss";

const Home = () => {
  return (
    <>
      <section className="content-cv">
        <TimeLine />
        <Skills />
      </section>
      <LongFooter />
    </>
  );
}

export default Home;
