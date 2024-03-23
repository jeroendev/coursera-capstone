import React from "react";
import logo from "../assets/logo-little-lemon.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-4">
        {" "}
        <hr />
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="Little lemon logo" id="footer-img" />
            <p>
              We are a family restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className=" list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <Link to="/booking">Reservations</Link>
              </li>
              <li>
                <a href="#menu">Order Online</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className=" list-unstyled">
              <li>123 Town Street, Chicago</li>
              <li>
                <a href="tel:0123456789">0123-456-789</a>
              </li>
              <li>
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className=" list-unstyled">
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
