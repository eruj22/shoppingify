import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

function Select({ onChange, value }) {
  return (
    <Wrapper>
      <AiFillCaretDown className="icon" />

      <SelectContainer
        name="status"
        className="select"
        onChange={onChange}
        value={value}
      >
        {!value && <option value="all">all lists</option>}
        <option value="active">active</option>
        <option value="completed">completed</option>
        <option value="cancelled">cancelled</option>
      </SelectContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    pointer-events: none;
  }
`;

const SelectContainer = styled.select`
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
`;

export default Select;
