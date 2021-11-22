import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/history_reducer";
import axios from "axios";

const initialState = {
  historyLists: [],
  historyLoading: false,
};

const HistoryContext = React.createContext();

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchHistory = async (url) => {
    dispatch({ type: "GET_HISTORY_LOADING" });

    try {
      const response = await axios(url);
      const historyLists = response.data.history;
      dispatch({ type: "GET_HISTORY_SUCCESS", payload: historyLists });
    } catch (error) {
      console.log(error);
    }
  };

  // const changeStatus = async (id, status) => {
  //   await axios.patch(
  //     `${process.env.REACT_APP_API_URL_HISTORY}${id}`,
  //     { status }
  //   );
  //   dispatch({ type: "HISTORY_CHANGE_STATUS", payload: { id, status } });
  // };

  useEffect(() => {
    fetchHistory(process.env.REACT_APP_API_URL_HISTORY);
  }, []);

  return (
    <HistoryContext.Provider value={{ ...state }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};
