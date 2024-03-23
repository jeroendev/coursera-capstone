import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/bruscetta.jpg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <section className="container">
          <div className="banner">
            <div className="row">
              <div className="col-md-8">
                <h2 className=" text-warning">Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                  We are a family restaurant, focused on traditional recipes
                  served with a modern twist.
                </p>
                <Link to="/booking" className=" mt-5 btn btn-warning">
                  Reserve A Table
                </Link>
              </div>
              <div className="col-md-4">
                <div className="banner-img mt-md-0 mt-4">
                  <img
                    className=""
                    src={bannerImg}
                    alt="Banner of little lemon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
