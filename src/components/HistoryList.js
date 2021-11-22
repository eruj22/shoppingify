import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";
import DisplayStatus from "./DisplayStatus";

function HistoryList(props) {
  const { name, status, updatedAt, _id } = props;

  return (
    <Wrapper>
      <h2 className="name">{name}</h2>
      <DisplayDate date={updatedAt} />
      <DisplayStatus status={status} />

      <Link to={_id} className="rightArrow">
        <AiOutlineRight />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 2rem 0;

  h2 {
    margin: 0;
  }

  .rightArrow {
    color: orange;
    font-size: 1.3rem;
  }
`;

export default HistoryList;
