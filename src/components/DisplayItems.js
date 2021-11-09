import React from "react";
import styled from "styled-components";
import DisplaySingleItem from "./DisplaySingleItem";
import { filterByArray } from "../utils/functions";

function DisplayItems({ items }) {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <Wrapper>
      {uniqueCategories.map((category, index) => {
        return (
          <div key={index}>
            <div className="category">
              <h3 className="category__title">{category}</h3>
            </div>
            <div className="items">
              {filterByArray(items, category).map((item) => {
                const { name, _id } = item;
                return <DisplaySingleItem key={_id} name={name} />;
              })}
            </div>
          </div>
        );
      })}
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
