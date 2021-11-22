import React from "react";
import styled from "styled-components";

function DisplayStatus({ status }) {
  return (
    <Wrapper>
      <div className={`status ${status}`}>{status}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 0.2rem;

  .status {
    padding: 0.1rem 0.4rem;
    border: solid 1px;
    border-radius: 0.5rem;
  }

  .active {
    color: #5a8d03;
  }

  .completed {
    color: #35baf6;
  }

  .cancelled {
    color: #ff2424;
  }
`;

export default DisplayStatus;
