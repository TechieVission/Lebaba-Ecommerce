import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        {/* first column */}
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, Hyderabad, Telangana, India
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@test.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +91 1234567890
          </p>
        </div>

        {/* second column */}
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms And Conditions</a>
        </div>

        {/* Third column */}
        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="/">Help</a>
          <a href="/">Track My Order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>

        {/* Fourth column */}
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src="./assets/instagram-1.jpg" alt="" />
            <img src="./assets/instagram-2.jpg" alt="" />
            <img src="./assets/instagram-3.jpg" alt="" />
            <img src="./assets/instagram-4.jpg" alt="" />
            <img src="./assets/instagram-5.jpg" alt="" />
            <img src="./assets/instagram-6.jpg" alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright &copy;2025 web Design pavan. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
