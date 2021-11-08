import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #333;
    font-size: 1rem;
  }


  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-weight: bold;
  }

  input,textarea{
    /* make font style the same */
  }

  a {
    color: #333;
    text-decoration: none;
  }

  input {
    border: none;
    border-radius: .5rem;
  }
  
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  @media (max-width: 1600px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.4rem;
    }
  }
`;
