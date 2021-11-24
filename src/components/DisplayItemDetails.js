import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/context";
import { BsArrowLeft } from "react-icons/bs";
import NoImage from "../assets/no_image.jpg";
import BtnSecondary from "./BtnSecondary";
import BtnPrimary from "./BtnPrimary";
import { useListContext } from "../context/shopping_list_context";

function DisplayItemDetails() {
  const { closeItemDetails, singleItemDetails, deleteItem } = useAppContext();
  const { addToList } = useListContext();
  const { name, image, category, note, _id } = singleItemDetails[0];

  const handleDelete = () => {
    deleteItem(_id);
    closeItemDetails();
  };

  return (
    <Wrapper>
      <button onClick={closeItemDetails} className="close">
        <BsArrowLeft className="close__icon" />
        back
      </button>

      <img src={image ? image : NoImage} className="image" alt={name} />

      <p className="label">Name</p>
      <p className="name">{name}</p>

      <p className="label">Category</p>
      <p className="name">{category}</p>

      <p className="label">Note</p>
      <p className="name">{note ? note : ""}</p>

      <div className="buttons">
        <BtnSecondary text="delete" onClick={handleDelete} />

        <BtnPrimary
          text="Add to list"
          onClick={() => {
            addToList(name, note, image, category, _id);
            closeItemDetails();
          }}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  z-index: 10;
  padding: 1rem 2rem;
  position: relative;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .close {
    display: flex;
    align-items: center;
    color: orange;
    align-self: flex-start;
    font-size: 1rem;
    font-weight: normal;

    &__icon {
      margin-right: 0.5rem;
    }
  }

  .image {
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }

  .label {
    margin: 0;
    color: gray;
    font-size: 0.9rem;
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.5rem 0 1.5rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }

  @media (max-width: 1200px) {
    z-index: 2;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export default DisplayItemDetails;
