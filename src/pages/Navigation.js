import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useAppContext } from "../context/context";
import { AiOutlineMenu } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

function Navigation({ hideBurger = false }) {
  const { openSidebar } = useAppContext();

  return (
    <>
      <ReactTooltip effect="solid" />
      <Wrapper>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>

        <div className="links">
          <Link to="/items" data-tip="items" className="links__item">
            <MdRestaurantMenu />
          </Link>

          <Link to="/history" data-tip="history" className="links__item">
            <RiArrowGoBackLine />
          </Link>
        </div>

        <div></div>

        <button
          className={`btnOpen ${hideBurger && "hide"}`}
          onClick={openSidebar}
        >
          <AiOutlineMenu className="btnOpen__icon" />
        </button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .links {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__item {
      font-size: 1.5rem;
    }
  }

  .btnOpen {
    display: none;
  }

  @media (max-width: 1200px) {
    .btnOpen {
      display: block;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: transparent;

      &__icon {
        font-size: 1.5rem;
      }
    }

    .hide {
      display: none;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem 0.5rem;
  }
`;

export default Navigation;
