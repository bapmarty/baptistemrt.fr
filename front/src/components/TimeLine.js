import React from 'react';
import TimeLineBlock from './TimeLineBlock';

const TimeLine = () => {

  const arr = [
    {"title" : "Encadrant d'escalade (Vertical'Art)", "start" : "Novembre 2019", "end" : "Actuellement", "post" : "CDI (20h)", "desc" : "Professeur d'escalade en SAE à Paris Pigalle"},
    {"title" : "École 42", "start" :"Novembre 2019", "end" : "Actuellement", "post" : "Étudiant", "desc" : "École de programmation à Paris"},
    {"title" : "Stage développeur web chez Skilters", "start" :"Mai 2019", "end" : "Juin 2019", "post" : "Stagiaire", "desc" : "Développement de la nouvelle interface des rapports soft skills \n Stack: ReactJS, Typescript, Redux, Jest, Docker"},
    {"title" : "École d'informatique EPSI (BAC +1)", "start" :"Septembre 2018", "end" : "Juillet 2019", "post" : "Étudiant", "desc" : "École de programmation à La Défense"},
    {"title" : "Initiateur SAE (Surface Artificielle d'escalade)", "start" :"Septembre 2015", "end" : "Juillet 2019", "post" : "Bénévole", "desc" : "Encadrement de cours Enfants et Adultes dans un club d'escalade"},
    {"title" : "BAC STI2D mention Assez Bien", "start" :"Juillet 2018", "end" : "", "post" :"", "desc" : "Lycée Emilie de Bretueil, 78"},
    {"title" : "Formation SAE (Escalade)", "start" :"Septembre 2017", "end" : "", "post" : "", "desc" : "Formation à l'encadrement d'escalade en intérieur"},
    {"title" : "Brevet des collèges", "start" :"Juillet 2015", "end" : "", "post" : "", "desc" : "Collège de l'agiot, 78"}
  ];


  return (
      <>
        <section className="global-tl">
          <div className="text">
            <span>“</span>Étudiant depuis novembre 2019 à l'école d'informatique 42 et passionné d'informatique et de nouvelles technologies 
            depuis le collège, ainsi que de programmation avec quelques créations disponible sur mon <a href="https://github.com/baptistemrt">GitHub</a>.<span>”</span>
          </div>
          <section className="arrow-tl">
            <section className="left-tl">
            {
              arr.map((tl, i) => {
                console.log(i);
                if (i % 2 === 0) {
                  console.log(i);
                  return (
                    <TimeLineBlock title={tl.title} start={tl.start} end={tl.end} post={tl.post} desc={tl.desc} opacity={0}/>
                  );
                }
              })
            }
            </section>
            <div className="tl"></div>
            <section className="right-tl">
            {
              arr.map((tl, i) => {
                console.log(i);
                if (i % 2 != 0) {
                  return (
                    <TimeLineBlock title={tl.title} start={tl.start} end={tl.end} post={tl.post} desc={tl.desc} opacity={0}/>
                  );
                }
              })
            }
            </section>
          </section>
        </section>
      </>
  );
}

export default TimeLine;