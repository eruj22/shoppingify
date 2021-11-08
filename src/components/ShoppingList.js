import React from "react";
import styled from "styled-components";
import ShoppingListItem from "./ShoppingListItem";

function ShoppingList() {
  return (
    <Wrapper>
      <span className="title">Fruit</span>
      <ShoppingListItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    display: block;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid gray;
    color: gray;
  }
`;

export default ShoppingList;
