import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import StarRatings from "./StarRatings";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have?</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experienced_frontend">
          <h3>Frontend Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>HTML</h4>
                <small className="text-light" ><StarRatings stars={5}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>CSS</h4>
                <small className="text-light"><StarRatings stars={3}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>React</h4>
                <small className="text-light"><StarRatings stars={4}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>Redux</h4>
                <small className="text-light"><StarRatings stars={2}/></small>
              
            </article>
          </div>
        </div>
        <div className="experienced_backend">
          <h3>Backend Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>Node JS</h4>
                <small className="text-light"><StarRatings stars={1}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>Javascript</h4>
                <small className="text-light"><StarRatings stars={4}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>C++</h4>
                <small className="text-light"><StarRatings stars={3}/></small>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              
                <h4>C#</h4>
                <small className="text-light"><StarRatings stars={3}/></small>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
