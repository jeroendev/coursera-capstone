import React from "react";
import pasta from "../assets/pasta.jpg";

const About = () => {
  return (
    <section className="container pt-5 pb-5" id="about">
      <div className="banner">
        <div className="row">
          <div className="col-md-8">
            <h2 className=" text-warning">Little Lemon</h2>
            <h3 className="mb-4">Chicago</h3>
            <p>
              We are a family restaurant, focused on traditional recipes served
              with a modern twist. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus placeat, iusto voluptate
              accusamus quidem nobis in molestias velit! Assumenda possimus,
              reprehenderit officiis fugit rem, eum sapiente libero reiciendis
              expedita magni quod eligendi labore consequatur modi ducimus.
              Totam quaerat nam illo voluptate. Quas, minus repellat cum eaque
              amet unde asperiores quibusdam?
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className=" mt-md-0 mt-4">
              <img
                className="img-fluid about-img"
                src={pasta}
                alt="Banner of little lemon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
