import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useHistoryContext } from "../context/history_context";
import DisplayDate from "./DisplayDate";
import DisplayItems from "./DisplayItems";
import { AiFillCaretDown } from "react-icons/ai";

function HistorySingleList() {
  const { historyLists, historyLoading } = useHistoryContext();
  const { id } = useParams();

  const singleList = historyLists.find((list) => list._id === id);
  const { name, status, updatedAt, items } = singleList;

  if (historyLoading) {
    return <h2>Loading...</h2>;
  }

  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Wrapper>
      <Link to="/history" className="back">
        <BsArrowLeft className="back__icon" />
        back
      </Link>

      <div className="flex">
        <h2>{name}</h2>
        <div className="status">
          <AiFillCaretDown className="status__icon" />
          <select name="status" className="status__select" onChange={onChange}>
            <option value="active">active</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
      </div>
      <DisplayDate date={updatedAt} />
      <DisplayItems items={items} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 5rem;
  background-color: #e8f7fc;
  overflow: auto;

  .back {
    display: flex;
    align-items: center;
    color: orange;
    width: fit-content;
    padding: 0.5rem 0;

    &__icon {
      margin-right: 0.5rem;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .status {
    position: relative;

    &__icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }

    &__select {
      min-width: 120px;
      margin-left: auto;
      appearance: none;
      background-color: transparent;
      border: 1px solid #222;
      border-radius: 0.5rem;
      background-color: #fff;
      padding: 0.3rem;
      font-family: inherit;
      font-size: inherit;
      cursor: pointer;
    }
  }
`;

export default HistorySingleList;
