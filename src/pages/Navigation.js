import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

function Navigation() {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="links">
        <Link to="/items" className="links__item">
          <MdRestaurantMenu />
        </Link>
        <Link to="/history" className="links__item">
          <RiArrowGoBackLine />
        </Link>
        <Link to="#" className="links__item">
          <GoGraph />
        </Link>
      </div>
      <div></div>
    </Wrapper>
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
`;

export default Navigation;
