import React from "react";
import "./testimonial.css";
import AKD from "../../assets/AKD.JPG";
import AD from "../../assets/AD.jpg";

const data = [
  {
    id: 1,
    name: "Angana Dawn",
    designation:"R&D Engineer",
    comapny: "NOKIA",
    image: AD,
    review:
      "One of the most promising and creative person I have ever come across. Saubhagya is full of ideas. And he is best in what he does.",
  },
  {
    id: 2,
    name: "Abhay Kumar Dhar",
    designation:"Engineer",
    comapny: "L&T Technology Services",
    image: AKD,
    review:
      "",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Check out</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial_container">
        {data.map((e) => {
          return (
            <article className="testimonial">
              <div className="uppercard">
                <div className="testimonials_avatar">
                  <img src={e.image} alt="" />
                </div>
              </div>
              <h5 className="testimonial_name">{e.name}</h5>
              <small className="testimonials_review">{e.review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
