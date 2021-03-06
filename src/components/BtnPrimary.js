import React from "react";
import styled from "styled-components";

function BtnPrimary({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  border-radius: 0.5rem;
  padding: 1rem 1.4rem;
  background-color: orange;
  color: #fff;
`;

export default BtnPrimary;
