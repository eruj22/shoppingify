import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useListContext } from "../context/shopping_list_context";
import ShoppingListItem from "./ShoppingListItem";
import { filterByCategory, getUniqueCategories } from "../utils/functions";
import { BsFillPencilFill } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { notifySuccess } from "../utils/functions";
import { useHistoryContext } from "../context/history_context";

function ShoppingList() {
  const { shoppingList, clearList, addToList } = useListContext();
  const { againFetchHistoryLists } = useHistoryContext();
  const [shoppingListName, setShoppingListName] = useState("Shopping List");
  const [canUpdateList, setCanUpdateList] = useState(false);
  const [shoppingListError, setShoppingListError] = useState({});

  const uniqueCategories = getUniqueCategories(shoppingList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = shoppingListName.trim();
    const items = shoppingList;

    let errors = {};
    if (name.length < 2) {
      errors.name = "Shopping list name must be longer than 2 characters";
    }
    if (items.length < 1) {
      errors.items = "Add more items to the shopping list";
    }
    setShoppingListError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const history = {
      name,
      items,
    };

    axios
      .post(process.env.REACT_APP_API_URL_HISTORY, history)
      .then(() => {
        againFetchHistoryLists();
        notifySuccess("Successfully saved shopping list");
        clearList();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setShoppingListError({});
  }, [addToList]);

  return (
    <Wrapper>
      <Toaster
        toastOptions={{
          style: {
            padding: "1rem",
            color: "#111",
            background: "#39DB80",
          },
        }}
      />

      <div className="list">
        <header className="list__header">
          <h2 className={canUpdateList ? "hide" : "list__title"}>
            {shoppingListName ? shoppingListName : " "}
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
          {shoppingListError.name && (
            <span className="list__error error--name">
              {shoppingListError.name}
            </span>
          )}
        </header>
        <div className="list__main">
          {shoppingListError.items && (
            <span className="list__error error--items">
              {shoppingListError.items}
            </span>
          )}
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
          <BtnSecondary
            text={"clear list"}
            onClick={() => {
              clearList();
              setShoppingListName("Shopping List");
              setCanUpdateList(false);
            }}
          />
          <BtnPrimary text={"save list"} onClick={handleSubmit} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .list {
    &__header {
      position: relative;
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

    &__error {
      z-index: 3;
      padding: 0.4rem;
      border-radius: 0.5rem;
      color: red;
      font-weight: bold;
      top: 4rem;
      background-color: #fff;
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
    width: 16.3vw;

    &__container {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }

  .hide {
    display: none;
  }

  .error--name {
    position: absolute;
  }

  .error--items {
    display: inline-block;
    transform: translateY(4rem);
  }
`;

export default ShoppingList;
