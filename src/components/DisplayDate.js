import React from "react";
import styled from "styled-components";
import { convertDate } from "../utils/functions";
import { AiOutlineCalendar } from "react-icons/ai";

function DisplayDate({ date }) {
  return (
    <Wrapper>
      <AiOutlineCalendar className="icon" />
      <div className="date">{convertDate(date)}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: gray;

  .icon {
    margin-right: 0.4rem;
    font-size: 1.5rem;
  }
`;

export default DisplayDate;
