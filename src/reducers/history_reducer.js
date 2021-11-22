const reducer = (state, action) => {
  if (action.type === "GET_HISTORY_LOADING") {
    return { ...state, historyLoading: true };
  }

  if (action.type === "GET_HISTORY_SUCCESS") {
    const newList = action.payload.reverse();
    return { ...state, historyLists: newList, historyLoading: false };
  }

  if (action.type === "HISTORY_CHANGE_STATUS") {
    const { id, status } = action.payload;
    const currentList = state.historyLists.filter((list) => list._id === id);
    currentList.status = status;
    return { ...state };
  }

  if (action.type === "FETCH_AGAIN") {
    return { ...state };
  }

  if (action.type === "HISTORY_DELETE_LIST") {
    const tempList = state.historyLists.filter(
      (list) => list._id !== action.payload
    );
    return { ...state, historyLists: tempList };
  }

  return state;
};

export default reducer;
