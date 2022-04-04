import React from "react";
import localRedux from "../../assets/localStorage_vs_ReduxPersist.jpeg";
import reactFirestore from "../../assets/reactFirestore.jpeg";

import "./portfolio.css";

const ImgData = [
  {
    id: 1,
    image: localRedux,
    title: "Local Storage vs Redux Persist",
  },
  {
    id: 2,
    image: reactFirestore,
    title: "React + Google Firebase: Complete Tutorial",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent</h5>
      <h2>Works</h2>

      <div className="container portfolio_container">
        {ImgData.map((e) => { return(
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={e.image} />
            </div>
            <h3>{e.title}</h3>
            <div className="portfolio_item-cta">
              <a href="https://www.github.com" className="btn">
                GitHub
              </a>
            </div>
          </article>);
        })}
      </div>
    </section>
  );
};

export default Portfolio;
