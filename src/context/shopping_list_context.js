import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/shopping_list_reducer";

const getLocalStorage = () => {
  let shoppingList = localStorage.getItem("shoppingList");
  if (shoppingList) {
    return JSON.parse(shoppingList);
  } else {
    return [];
  }
};

const initialState = { shoppingList: getLocalStorage() };

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToList = (name, note, image, category) => {
    const amount = 1;
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: { name, note, image, category, amount },
    });
  };

  const removeItem = (name) => {
    dispatch({ type: "REMOVE_ITEM", payload: name });
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const toggleAmount = (itemName, amount) => {
    dispatch({ type: "TOGGLE_ITEM_AMOUNT", payload: { itemName, amount } });
  };

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
  }, [state.shoppingList]);

  return (
    <ListContext.Provider
      value={{ ...state, addToList, removeItem, clearList, toggleAmount }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  return useContext(ListContext);
};
