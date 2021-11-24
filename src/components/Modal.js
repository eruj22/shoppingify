import React from "react";
import styled from "styled-components";
import BtnPrimary from "./BtnPrimary";
import { IoMdClose } from "react-icons/io";

function Modal({ onClick, isModalOpen, closeModal }) {
  return (
    <Wrapper className={isModalOpen ? "flex" : ""}>
      <div className="modal">
        <h2 className="modal__title">
          Do you really want to delete shopping list?
        </h2>

        <BtnPrimary text={"delete"} onClick={onClick} />

        <button onClick={closeModal}>
          <IoMdClose className="modal__icon" />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 10;
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

  .modal {
    position: relative;
    background-color: #fff;
    padding: 3rem;
    border-radius: 0.5rem;

    &__title {
      margin-top: 0;
    }

    &__icon {
      font-size: 2rem;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
`;

export default Modal;
