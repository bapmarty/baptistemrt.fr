import React from 'react';

import TimeLine from './TimeLine';
import ProgressBar from './ProgressBar';
import LongFooter from '../layouts/LongFooter';

import "../assets/scss/components/Home.scss";

const Home = () => {

  const skillsList = [
    {"skill" : "Anglais", "percent": "0.5"},
    {"skill" : "Espagnol", "percent": "0.25"},
    {"skill" : "Suite Google", "percent": "0.85"},
    {"skill" : "Suite Office", "percent": "0.75"},
    {"skill" : "Suite Adobe", "percent": "0.45"},
    {"skill" : "Linux / Windows / MacOS", "percent": "0.8"},
    {"skill" : "Assembler", "percent": "0.3"},
    {"skill" : "C / C++", "percent": "0.5"},
    {"skill" : "Python", "percent": "0.4"},
    {"skill" : "HTML / CSS", "percent": "0.95"},
    {"skill" : "JavaScript", "percent": "0.75"},
    {"skill" : "ReactJS", "percent": "0.85"},
    {"skill" : "Php / MySQL", "percent": "0.75"},
    {"skill" : "Laravel", "percent": "0.45"},
    {"skill" : "Ruby", "percent": "0.4"},
    {"skill" : "Ruby On Rails", "percent": "0.25"},
    {"skill" : "Docker", "percent": "0.85"},
    {"skill" : "Git", "percent": "0.75"}
  ];

  return (
    <>
      <section className="content-cv">
        <TimeLine />
        <section className="skills">
          <h3>COMPÉTENCES</h3>
          {
            skillsList.map((skill, i) => {
              return (
                <div className="progress-content">
                  <h4>{skill.skill}</h4>
                  <ProgressBar width={260} percent={skill.percent} />
                </div>
              );
            })
          }
        </section>
      </section>
      <LongFooter />
    </>
  );
}

export default Home;
