import React, { useState } from "react";
import styled from "styled-components";
import sauce from "../assets/sauce.svg";
import AddNewItem from "../components/AddNewItem";
import ShoppingList from "../components/ShoppingList";

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

      <ShoppingList />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  background-color: beige;
  padding: 2rem;
  min-width: 330px;
  /* TODO: constrain container so that you can see overflown items */
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
`;

export default RightPreview;
