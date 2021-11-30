import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useListContext } from "../context/shopping_list_context";
import { useAppContext } from "../context/context";

function DisplaySingleItem({ item, handleToggle }) {
  const { addToList } = useListContext();
  const { openItemDetails } = useAppContext();
  const { name, note, image, category, _id } = item;

  return (
    <Wrapper>
      {item.amount && (
        <Checkbox
          onChange={(e) => {
            handleToggle(_id, e.target.checked);
          }}
          checked={item.checked}
          type="checkbox"
          id={_id}
        />
      )}
      {item.amount ? (
        <label htmlFor={_id} className={`label ${item.checked && "checked"}`}>
          {name}
        </label>
      ) : (
        <span className="name" onClick={() => openItemDetails(_id)}>
          {name}
        </span>
      )}
      {item.amount ? (
        <span className="amount">{item.amount} pcs</span>
      ) : (
        <button
          onClick={() => {
            addToList(name, note, image, category, _id);
          }}
        >
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

  .checked {
    text-decoration: line-through;
    color: orange;
  }

  .amount {
    font-size: 0.8rem;
    font-weight: bold;
    color: orange;
  }

  .label {
    margin-right: auto;
    padding-left: 0.5rem;
    position: relative;
    cursor: pointer;
  }
`;

const Checkbox = styled.input`
  cursor: pointer;
  appearance: none;
  border: 2px solid #222;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 7px;
  border-radius: 3px;
  display: inline-block;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 1px;
    left: 4px;
    width: 6px;
    height: 10px;
    border-style: solid;
    border-color: $white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    color: orange;
    border-color: orange;

    &::before {
      opacity: 1;
    }
  }
`;

export default DisplaySingleItem;
