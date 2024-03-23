import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image, description, btn } = useGlobalContext();

  return (
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Welcome to our Community !</p>
            <h1 className="hero-heading">I'm Devendra Jangir</h1>
            <p className="hero-para">Your Personalized Course Finder. Tailored roadmaps, course recommendations, and a vibrant learning community await. Start your journey today!</p>
            <Button className="btn hireme-btn">
              <NavLink to="/contact">Join Us</NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <img src={image} alt="hero image" className="hero-img" />
            </picture>
          </div>
        </div>
      </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
    font-weight: bold;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
