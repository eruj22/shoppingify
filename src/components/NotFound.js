import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Wrapper>
      <h1 className="title">404 Error</h1>
      <p className="subtitle">The site you are looking for isn't found</p>
      <Link to="/" className="link">
        Go back to the main page
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  color: #333;

  .title {
    font-size: 5rem;
    margin: 1rem 0;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .link {
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-weight: bold;
    background-color: orange;
    color: #fff;
  }
`;

export default NotFound;
