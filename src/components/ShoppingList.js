import React, { useState } from "react";
import styled from "styled-components";
import { useListContext } from "../context/shopping_list_context";
import ShoppingListItem from "./ShoppingListItem";
import { filterByCategory, getUniqueCategories } from "../utils/functions";
import { BsFillPencilFill } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import axios from "axios";

function ShoppingList() {
  const { shoppingList, clearList } = useListContext();
  const [shoppingListName, setShoppingListName] = useState("Shopping List");
  const [canUpdateList, setCanUpdateList] = useState(false);

  const uniqueCategories = getUniqueCategories(shoppingList);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: add toast notification when item is added successfully
    // TODO: input validation for the user
    // TODO: on add item reload display of items

    if (shoppingList.length < 1) {
      console.log("shopping cart can't be empty");
      return;
    }

    const history = {
      name: shoppingListName,
      items: shoppingList,
    };

    axios
      .post(process.env.REACT_APP_API_URL_HISTORY, history)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <div className="list">
        <header className="list__header">
          <h2 className={canUpdateList ? "hide" : "list__title"}>
            {shoppingListName}
          </h2>
          <input
            className={canUpdateList ? "list__input" : "hide"}
            placeholder="list name"
            value={shoppingListName}
            onChange={(e) => setShoppingListName(e.target.value)}
          />
          <BsFillPencilFill
            className={canUpdateList ? "hide" : "list__editIcon"}
            onClick={() => setCanUpdateList(true)}
          />
          <BsCheckLg
            className={canUpdateList ? "list__editIcon" : "hide"}
            onClick={() => setCanUpdateList(false)}
          />
        </header>
        <div className="list__main">
          {uniqueCategories.map((category, index) => {
            return (
              <div key={index}>
                <span className="list__categoryName">{category}</span>
                {filterByCategory(shoppingList, category).map((item, index) => {
                  return (
                    <ShoppingListItem
                      item={item}
                      key={index}
                      canUpdateList={canUpdateList}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="listAction">
        <div className="listAction__container">
          <BtnSecondary text={"clear list"} onClick={clearList} />
          <BtnPrimary text={"save list"} onClick={handleSubmit} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .list {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__input {
      font-size: 1.4rem;
      width: 80%;
      margin: 1.5rem 0;
      padding: 0.3rem;
    }

    &__categoryName {
      display: block;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid gray;
      color: gray;
    }

    &__title {
      margin-right: 1rem;
    }

    &__editIcon {
      cursor: pointer;
    }
  }

  .listAction {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.5rem 2rem;
    min-width: 330px;

    &__container {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }

  .hide {
    display: none;
  }
`;

export default ShoppingList;
