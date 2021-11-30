import React from "react";
import styled from "styled-components";
import BtnPrimary from "./BtnPrimary";
import { IoMdClose } from "react-icons/io";

function Modal({ onClick, isOpen, close, text }) {
  return (
    <Wrapper className={isOpen && "flex"}>
      <ModalContainer>
        <h2 className="title">{text}</h2>

        <BtnPrimary text={"delete"} onClick={onClick} />

        <button onClick={close} className="close">
          <IoMdClose />
        </button>
      </ModalContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  justify-content: center;
  align-items: center;

  .flex {
    display: flex;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 3rem;
  border-radius: 0.5rem;

  .title {
    margin-top: 0;
  }

  .close {
    font-size: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export default Modal;
