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
                const { name } = item;
                return <DisplaySingleItem key={name} item={item} />;
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
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  @media (max-width: 1920px) {
    .items {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1600px) {
    .items {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    .items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 750px) {
    .items {
      grid-template-columns: 1fr;
    }
  }
`;

export default DisplayItems;
