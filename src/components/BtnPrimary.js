import React from "react";
import styled from "styled-components";

function BtnPrimary({ text, onClick }) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
}

const Wrapper = styled.button`
  border-radius: 0.5rem;
  padding: 1rem 1.4rem;

  background-color: orange;
  color: #fff;
`;

export default BtnPrimary;
