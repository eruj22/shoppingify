import React from "react";
import styled from "styled-components";

function BtnSecondary({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 1rem 1.4rem;
  margin-right: 1rem;
`;

export default BtnSecondary;
