import React, { useState } from "react";
import styled from "styled-components";
import sauce from "../assets/sauce.svg";
import AddNewItem from "../components/AddNewItem";
import DisplayItemDetails from "../components/DisplayItemDetails";
import ShoppingList from "../components/ShoppingList";
import { useAppContext } from "../context/context";
import { GrFormClose } from "react-icons/gr";

function RightPreview() {
  const { showItemDetails, isSidebarOpen, closeSidebar } = useAppContext();
  const [showAddItem, setShowAddItem] = useState(false);

  if (showItemDetails) {
    return <DisplayItemDetails />;
  }

  if (showAddItem) {
    return <AddNewItem setShowAddItem={setShowAddItem} />;
  }

  return (
    <Wrapper style={isSidebarOpen ? { display: "block" } : { display: "none" }}>
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

      <button className="btnClose" onClick={closeSidebar}>
        <GrFormClose className="btnClose__icon" />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  background-color: beige;
  z-index: 2;
  padding: 2rem;
  min-width: 330px;
  width: 20vw;
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

  .btnClose {
    display: none;
  }

  @media (max-width: 1200px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    .btnClose {
      display: block;
      z-index: 3;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: transparent;

      &__icon {
        font-size: 1.5rem;
      }
    }
  }
`;

export default RightPreview;
