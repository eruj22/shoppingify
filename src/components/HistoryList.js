import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";
import DisplayStatus from "./DisplayStatus";

function HistoryList(props) {
  const { name, status, createdAt, _id } = props;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <DisplayDate date={createdAt} />
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
  margin: 1rem 0;

  .rightArrow {
    align-self: end;
    color: orange;
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .rightArrow {
      justify-self: end;
    }
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    justify-items: center;

    .rightArrow {
      justify-self: center;
    }
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export default HistoryList;
