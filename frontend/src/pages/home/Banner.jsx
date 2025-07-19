import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="section__container  header__container">
      <div className="header__content">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>
        <button className="btn">
          <Link to="/">EXPLORE NOW</Link>
        </button>
      </div>
      {/* Banner Image */}
      <div className="header__image">
        <img src="./assets/header.png" />
      </div>
    </div>
  );
};

export default Banner;
