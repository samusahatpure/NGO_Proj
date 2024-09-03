import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Anand Jyoti</h1>
        <h3>Foundation</h3>
        <p>
        Welcome to Anand Jyoti Foundation, an NGO dedicated to uplifting the marginalized and disadvantaged communities in the rural areas of Maharashtra, particularly in Melghat Tribal Area. We are a group of passionate individuals committed to making a difference in the areas of livelihood, health, and education.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
