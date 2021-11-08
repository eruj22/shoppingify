import React from "react";
import styled from "styled-components";
import DisplaySingleItem from "./DisplaySingleItem";

function DisplayItems() {
  return (
    <Wrapper>
      <div className="category">
        <h3 className="category__title">Category</h3>
      </div>
      <div className="items">
        {["avocado", "banana", "carrots", "banana", "carrots"].map((item) => {
          return <DisplaySingleItem name={item} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .category {
    &__title {
      margin: 2rem 0 0.7rem;
    }
  }
  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

export default DisplayItems;
