import React from "react";
import styled from "styled-components";
import DisplaySingleItem from "./DisplaySingleItem";
import { filterByCategory, getUniqueCategories } from "../utils/functions";

function DisplayItems({ items }) {
  const uniqueCategories = getUniqueCategories(items);

  return (
    <Wrapper>
      {uniqueCategories.map((category, index) => {
        return (
          <div key={index}>
            <div className="category">
              <h3 className="category__title">{category}</h3>
            </div>
            <div className="items">
              {filterByCategory(items, category).map((item) => {
                const { _id } = item;
                return <DisplaySingleItem key={_id} item={item} />;
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
