import React from "react";

// card data
const cards = [
  {
    id: 1,
    image: "./assets/card-1.png",
    trend: "2025 Trend",
    title: "Womens Shirt",
  },

  {
    id: 2,
    image: "./assets/card-2.png",
    trend: "2025 Trend",
    title: "Womens Dresses",
  },

  {
    id: 3,
    image: "./assets/card-3.png",
    trend: "2025 Trend",
    title: "Women Casuals",
  },
];

const HeroSection = () => {
  return (
    <section className="section__container hero__container">
      {cards.map((card) => (
        <div key={card.id} className="hero__card">
          <img src={card.image} alt="" />
          <div className="hero__content">
            <p>{card.trend}</p>
            <h4>{card.title}</h4>
            <a href="#">Discover More</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
