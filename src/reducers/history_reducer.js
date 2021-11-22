const reducer = (state, action) => {
  if (action.type === "GET_HISTORY_LOADING") {
    return { ...state, historyLoading: true };
  }

  if (action.type === "GET_HISTORY_SUCCESS") {
    return { ...state, historyLists: action.payload, historyLoading: false };
  }

  // if (action.type === "HISTORY_CHANGE_STATUS") {
  //   const { id, status } = action.payload;
  //   const currentList = state.historyLists.filter((list) => list._id === id);
  //   currentList.status = status;
  //   return { ...state, currentList };
  // }

  return state;
};

export default reducer;
