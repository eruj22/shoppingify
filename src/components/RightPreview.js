import React, { useState } from "react";
import styled from "styled-components";
import sauce from "../assets/sauce.svg";
import { BsFillPencilFill } from "react-icons/bs";
import AddNewItem from "./AddNewItem";
import ShoppingList from "./ShoppingList";

function RightPreview() {
  const [showAddItem, setShowAddItem] = useState(false);

  if (showAddItem) {
    return <AddNewItem setShowAddItem={setShowAddItem} />;
  }

  return (
    <Wrapper>
      <div className="addItem">
        <div className="addItem__icon">
          <img src={sauce} alt="" />
        </div>
        <div className="addItem__text">
          <p className="addItem__paragraph">Didn't find what you need?</p>
          <button
            className="addItem__button"
            onClick={() => setShowAddItem(true)}
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="list">
        <header className="list__header">
          <h2 className="list__title">Shopping List</h2>
          <BsFillPencilFill className="list__editIcon" />
        </header>
        <div className="list__main">
          <ShoppingList />
        </div>
      </div>

      <div className="listName">
        <div className="listName__container">
          <input
            type="text"
            className="listName__input"
            placeholder="Enter a name"
          />
          <button className="listName__button">Save</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  background-color: beige;
  padding: 2rem;
  min-width: 330px;
  overflow: auto;

  .addItem {
    background-color: rgb(128, 72, 91);
    display: flex;
    gap: 1rem;
    border-radius: 1rem;
    color: #fff;
    height: 125px;
    padding: 0 0.5rem;

    &__icon {
      transform: translateY(-1.2rem);
    }

    &__button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }

  .list {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      margin-right: 1rem;
    }

    &__editIcon {
      cursor: pointer;
    }
  }

  .listName {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.5rem 2rem;
    min-width: 330px;

    &__container {
      position: relative;
    }

    &__input {
      width: 100%;
      height: 50px;
      padding: 0 1rem;
      border: 2px solid orange;
    }

    &__button {
      position: absolute;
      top: 0;
      right: 0;
      height: 50px;
      padding: 0 1rem;
      background-color: orange;
      border-radius: 0.5rem;
      color: #fff;
    }
  }
`;

export default RightPreview;
