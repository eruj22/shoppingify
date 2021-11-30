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

      <Label>Name</Label>
      <Name>{name}</Name>

      <Label>Category</Label>
      <Name>{category}</Name>

      <Label>Note</Label>
      <Name>{note ? note : ""}</Name>

      <Buttons>
        <BtnSecondary text="delete" onClick={handleDelete} />

        <BtnPrimary
          text="Add to list"
          onClick={() => {
            addToList(name, note, image, category, _id);
            closeItemDetails();
          }}
        />
      </Buttons>
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

  @media (max-width: 1200px) {
    z-index: 2;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const Label = styled.label`
  margin: 0;
  color: gray;
  font-size: 0.9rem;
`;

const Name = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0 1.5rem;
`;

export default DisplayItemDetails;
