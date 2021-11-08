import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

function DisplaySingleItem({ name }) {
  return (
    <Wrapper>
      <span className="name">{name}</span>
      <AiOutlinePlus className="icon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;

  .name {
    font-weight: bold;
  }

  .icon {
    cursor: pointer;
  }
`;

export default DisplaySingleItem;
