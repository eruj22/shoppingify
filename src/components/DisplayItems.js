import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DisplaySingleItem from "./DisplaySingleItem";
import { filterByCategory, getUniqueCategories } from "../utils/functions";
import { useHistoryContext } from "../context/history_context";

function DisplayItems({ singleList, items }) {
  const { toggleItemStatus, changeStatus } = useHistoryContext();
  const uniqueCategories = getUniqueCategories(items);
  const [newItems, setNewItems] = useState(singleList && singleList.items);

  const handleToggle = (itemId, isItemChecked) => {
    setNewItems(
      newItems.map((item) => {
        if (item._id === itemId && isItemChecked === true) {
          return { ...item, checked: true };
        } else if (item._id === itemId && isItemChecked === false) {
          return { ...item, checked: false };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    if (singleList) {
      toggleItemStatus(singleList._id, newItems);

      const findChecked = newItems.every((item) => item.checked === true);

      if (findChecked) {
        changeStatus(singleList._id, "completed");
      }
    }
    // eslint-disable-next-line
  }, [newItems]);

  return (
    <div>
      {uniqueCategories.map((category, index) => {
        return (
          <div key={index}>
            <CategoryTitle>{category}</CategoryTitle>

            <Items>
              {singleList
                ? filterByCategory(items, category).map((item) => {
                    const { _id } = item;
                    return (
                      <DisplaySingleItem
                        key={_id}
                        item={item}
                        handleToggle={handleToggle}
                      />
                    );
                  })
                : filterByCategory(items, category).map((item) => {
                    const { _id } = item;
                    return <DisplaySingleItem key={_id} item={item} />;
                  })}
            </Items>
          </div>
        );
      })}
    </div>
  );
}

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryTitle = styled.h3`
  margin: 2rem 0 0.7rem;
`;

export default DisplayItems;
