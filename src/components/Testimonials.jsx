import React from "react";
import testimonials from "../Testimonials";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h2 className="mb-3">Testimonials</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col">
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt="testimonial logo"
                  className="testimonials-img"
                />
                <div className="d-flex flex-column">
                  <h5 className="text-warning mt-3 mb-3">{testimonial.name}</h5>
                  <p className=" fw-bold">"{testimonial.comment}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
