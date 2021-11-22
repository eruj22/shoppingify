import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useListContext } from "../context/shopping_list_context";

function DisplaySingleItem({ item }) {
  const { addToList } = useListContext();
  const { name, note, image, category } = item;

  return (
    <Wrapper>
      <span className="name">{name}</span>
      {item.amount ? (
        <span className="amount">{item.amount} pcs</span>
      ) : (
        <button onClick={() => addToList(name, note, image, category)}>
          <AiOutlinePlus className="icon" />
        </button>
      )}
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

  .amount {
    font-size: 0.8rem;
    font-weight: bold;
    color: orange;
  }
`;

export default DisplaySingleItem;
