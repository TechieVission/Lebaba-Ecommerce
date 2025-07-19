import React from "react";

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src="./assets/deals.png" alt="" />
      </div>

      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals Of This Month</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>

        <div className="deals__countdown flex-wrap">
          {/* countdown days */}
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>

          {/* countdown hours */}
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hr</p>
          </div>

          {/* countdown Minutes */}
          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Min</p>
          </div>

          {/* countdown seconds */}
          <div className="deals__countdown__card">
            <h4>5</h4>
            <p>Sec</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
