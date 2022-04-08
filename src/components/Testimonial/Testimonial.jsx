import React from "react";
import "./testimonial.css";
import AKD from "../../assets/AKD.JPG";
import AD from "../../assets/AD.jpg";

const data = [
  {
    id: 1,
    name: "Angana Dawn",
    designation: "R&D Engineer",
    comapny: "NOKIA",
    image: AD,
    review:
      "One of the most promising and creative person I have ever come across. Saubhagya is full of ideas. And he is best in what he does.",
  },
  {
    id: 2,
    name: "Abhay Kumar Dhar",
    designation: "Engineer",
    comapny: "LTTS",
    image: AKD,
    review:
      "Me and Saubhagya started our career together. Saubhagya is one of the excellent person whom you can trust with your work. He knows how to add some creativity and make even a dull web page a astounding one.",
  },
  {
    id: 3,
    name: "Sachin Kumar",
    designation: "Engineer",
    comapny: "LTTS",
    image: AKD,
    review:
      "Me and Saubhagya started our career together. Saubhagya is one of the excellent person whom you can trust with your work. He knows how to add some creativity and make even a dull web page a astounding one.",
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
              <div className="avatar_name">
                <div className="testimonials_avatar">
                  <img src={e.image} alt="" />
                </div>
                <div className="testimonials_name_designation ">
                  <h4 className="testimonial_name">{e.name}</h4>
                  <small className="text-light">{e.designation} at {e.comapny}</small>
                </div>
              </div>

              <small className="testimonials_review">{e.review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
