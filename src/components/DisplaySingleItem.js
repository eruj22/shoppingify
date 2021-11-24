import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useListContext } from "../context/shopping_list_context";
import { useAppContext } from "../context/context";

function DisplaySingleItem({ item }) {
  const { addToList } = useListContext();
  const { openItemDetails } = useAppContext();
  const { name, note, image, category, _id } = item;

  return (
    <Wrapper>
      <span className="name" onClick={() => openItemDetails(_id)}>
        {name}
      </span>
      {item.amount ? (
        <span className="amount">{item.amount} pcs</span>
      ) : (
        <button onClick={() => addToList(name, note, image, category, _id)}>
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
    cursor: pointer;
    font-weight: bold;
  }

  .amount {
    font-size: 0.8rem;
    font-weight: bold;
    color: orange;
  }
`;

export default DisplaySingleItem;
