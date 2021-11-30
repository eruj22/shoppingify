import React from "react";
import styled, { keyframes } from "styled-components";

function Loader() {
  return (
    <Wrapper className="lds-ring">
      <ShowLoader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ShowLoader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ShowLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export default Loader;
