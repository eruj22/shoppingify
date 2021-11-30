import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Wrapper>
      <Title>404 Error</Title>
      <Subtitle>The site you are looking for isn't found</Subtitle>
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

  .link {
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-weight: bold;
    background-color: orange;
    color: #fff;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 1rem 0;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
`;

export default NotFound;
