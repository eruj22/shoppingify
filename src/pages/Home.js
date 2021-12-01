import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../utils/global";
import Navigation from "./Navigation";
import image from "../assets/hero.jpg";
import imageMobile from "../assets/hero_mobile.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navigation hideBurger={true} />

      <Hero>
        <div className="text">
          <h1 className="title">Shoppingify</h1>

          <p className="subtitle">
            Simplify your life with easy to use shopping list
          </p>

          <Link to="/items" className="cta">
            Start your own list
            <BsArrowRight className="icon" />
          </Link>
          <img src={imageMobile} className="imageMobile" alt="shopping list" />
        </div>
      </Hero>

      <ImageDesktop src={image} className="imageDesktop" alt="shopping list" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;

  img {
    animation: showGradually 1.5s ease-out 0s 1 normal forwards;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-15%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes showGradually {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Hero = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  border-left: 1px solid lightgray;

  .text {
    padding: 0 2rem;
  }

  .title {
    animation: slideInFromLeft 1s ease-out 0s 1 normal forwards;
    opacity: 0;
    font-size: 4rem;
    margin: 20% 0 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
    opacity: 0;
    animation: slideInFromLeft 1s ease-out 0.5s 1 normal forwards;
  }

  .cta {
    animation: slideInFromLeft 1s ease-out 1s 1 normal forwards;
    opacity: 0;
    font-size: 1.1rem;
    margin-top: 3rem;
    color: orange;
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .icon {
    margin-left: 0.5rem;
  }

  .imageMobile {
    display: none;
  }

  @media (max-width: 1200px) {
    .title {
      font-size: 3rem;
      margin: 2rem 0;
    }

    .subtitle {
      font-size: 1.3rem;
    }

    .cta {
      margin: 2rem 0;
    }

    .imageMobile {
      display: inline-block;
      width: 100%;
      max-width: 600px;
    }
  }

  @media (max-width: 400px) {
    .title {
      font-size: 2.25rem;
    }
  }
`;

const ImageDesktop = styled.img`
  max-width: 40%;
  object-fit: cover;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export default Home;
