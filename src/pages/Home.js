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

      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">Shoppingify</h1>

          <p className="hero__subtitle">
            Simplify your life with easy to use shopping list
          </p>

          <Link to="/items" className="hero__cta">
            Start your own list
            <BsArrowRight className="hero__icon" />
          </Link>
          <img
            src={imageMobile}
            className="hero__imageMobile"
            alt="shopping list"
          />
        </div>
      </div>
      <img src={image} className="hero__image" alt="shopping list" />
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

  .hero {
    justify-content: center;
    width: 100%;
    display: flex;
    border-left: 1px solid lightgray;

    &__text {
      padding: 0 2rem;
    }

    &__title {
      animation: slideInFromLeft 1s ease-out 0s 1 normal forwards;
      opacity: 0;
      font-size: 4rem;
      margin: 20% 0 3rem;
    }

    &__subtitle {
      font-size: 1.5rem;
      opacity: 0;
      animation: slideInFromLeft 1s ease-out 0.5s 1 normal forwards;
    }

    &__cta {
      animation: slideInFromLeft 1s ease-out 1s 1 normal forwards;
      opacity: 0;
      font-size: 1.1rem;
      margin-top: 3rem;
      color: orange;
      display: flex;
      align-items: center;
      width: fit-content;
    }

    &__icon {
      margin-left: 0.5rem;
    }

    &__imageMobile {
      display: none;
    }
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

  @media (max-width: 1200px) {
    .hero {
      &__title {
        font-size: 3rem;
        margin: 2rem 0;
      }

      &__subtitle {
        font-size: 1.3rem;
      }

      &__cta {
        margin: 2rem 0;
      }

      &__imageMobile {
        display: inline-block;
        width: 100%;
        max-width: 600px;
      }

      &__image {
        display: none;
      }
    }
  }
`;

export default Home;
