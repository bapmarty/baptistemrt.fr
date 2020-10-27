import React from 'react';

import TimeLine from './TimeLine';
import Skills from './Skills';
import Other from './Other';
import LongFooter from '../layouts/LongFooter';

import "../assets/scss/components/Home.scss";

const Home = () => {
  return (
    <>
      <section className="content-cv">
        <TimeLine />
        <Skills />
      </section>
      <Other />
      <LongFooter />
    </>
  );
}

export default Home;
