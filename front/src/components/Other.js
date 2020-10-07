import React from 'react';

import Climber from "../assets/images/climber.svg";
import Console from "../assets/images/console.svg";
import Runner from "../assets/images/runner.svg";
import Github from "../assets/images/github.svg";

const Other = () => {
  return (
    <>
      <section className="other">
        <section className="other-content">
            <div>
              <img src={Climber} alt={"grimpeur"}/>
              <h4>Grimpeur</h4>
            </div>
            <div>
              <img src={Console} alt={"passionné"}/>
              <h4>Passionné</h4>
            </div>
            <div>
              <img src={Runner} alt={"sportif"}/>
              <h4>Sportif</h4>
            </div>
            <div>
              <img src={Github} alt={"github user"}/>
              <h4>GitHub User</h4>
            </div>
        </section>
      </section>
    </>
  );
}

export default Other;