import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/reducer";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  itemsLoading: false,
  itemsError: false,
  items: [],
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

  useEffect(() => {
    fetchItems(process.env.REACT_APP_API_URL);
  }, [fetchAgain]);

  return (
    <AppContext.Provider
      value={{ ...state, openSidebar, closeSidebar, againFetchItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
