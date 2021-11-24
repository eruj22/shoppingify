import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/reducer";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  itemsLoading: false,
  itemsError: false,
  items: [],
  showItemDetails: false,
  singleItemDetails: [],
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchAgain, setFetchAgain] = useState(false);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const againFetchItems = () => {
    setFetchAgain(!fetchAgain);
  };

  const fetchItems = async (url) => {
    dispatch({ type: "GET_ITEMS_LOADING" });
    try {
      const response = await axios.get(url);
      const items = response.data.items;
      dispatch({ type: "GET_ITEMS_SUCCESS", payload: items });
    } catch (error) {
      dispatch({ type: "GET_ITEMS_ERROR" });
    }
  };

  const openItemDetails = (id) => {
    dispatch({ type: "OPEN_ITEM_DETAILS", payload: id });
  };

  const closeItemDetails = () => {
    dispatch({ type: "CLOSE_ITEM_DETAILS" });
  };

  const deleteItem = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}${id}`)
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  useEffect(() => {
    fetchItems(process.env.REACT_APP_API_URL);
  }, [fetchAgain]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        againFetchItems,
        openItemDetails,
        closeItemDetails,
        deleteItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
