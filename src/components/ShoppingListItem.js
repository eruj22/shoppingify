import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useListContext } from "../context/shopping_list_context";

function ShoppingListItem({ item, canUpdateList }) {
  const { toggleAmount, removeItem } = useListContext();
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const { name, amount } = item;

  const increase = () => {
    toggleAmount(name, "inc");
  };

  const decrease = () => {
    toggleAmount(name, "dec");
  };

  return (
    <Wrapper>
      <span className="name">{name}</span>
      <button
        className={isBtnClicked ? "btn--hide" : "btn btn--transparent"}
        onClick={() => setIsBtnClicked(true)}
        disabled={!canUpdateList}
      >
        {amount} pcs
      </button>
      <div className={isBtnClicked ? "buttons" : "buttons--hide"}>
        <button className="btnTrash" onClick={() => removeItem(name)}>
          <FiTrash2 />
        </button>
        <button className="btnMinus" onClick={decrease}>
          <AiOutlineMinus />
        </button>
        <button className={"btn"} onClick={() => setIsBtnClicked(false)}>
          {amount} pcs
        </button>
        <button className="btnPlus" onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .btn {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: 2px solid orange;
    color: orange;

    &--hide {
      display: none;
    }

    &--transparent {
      background-color: transparent;
    }
  }

  .buttons {
    z-index: 3;
    background-color: #fff;
    border-radius: 0.5rem;

    &--hide {
      display: none;
    }
  }

  .btnPlus,
  .btnMinus {
    color: orange;
    margin: 0 0.5rem;
  }

  .btnTrash {
    padding: 0.5rem;
    background-color: orange;
    color: #fff;
    border-radius: 0.5rem;
    border: 2px solid orange;
  }
`;

export default ShoppingListItem;
