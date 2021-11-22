import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/history_reducer";
import axios from "axios";

const initialState = {
  historyLists: [],
  historyLoading: false,
};

const HistoryContext = React.createContext();

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchAgain, setFetchAgain] = useState(false);

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

  const changeStatus = async (id, status) => {
    const currentList = state.historyLists.filter((list) => list._id === id);
    currentList[0].status = status;

    await axios.patch(
      `${process.env.REACT_APP_API_URL_HISTORY}${id}`,
      currentList[0]
    );
    dispatch({ type: "HISTORY_CHANGE_STATUS", payload: { id, status } });
  };

  const againFetchHistoryLists = () => {
    setFetchAgain(!fetchAgain);
    dispatch({ type: "FETCH_AGAIN" });
  };

  useEffect(() => {
    fetchHistory(process.env.REACT_APP_API_URL_HISTORY);
  }, [fetchAgain]);

  return (
    <HistoryContext.Provider
      value={{ ...state, changeStatus, againFetchHistoryLists }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};
