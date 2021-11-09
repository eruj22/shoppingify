const reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === "GET_ITEMS_LOADING") {
    return { ...state, itemsLoading: true };
  }

  if (action.type === "GET_ITEMS_ERROR") {
    return { ...state, itemsLoading: false, itemsError: true };
  }

  if (action.type === "GET_ITEMS_SUCCESS") {
    return { ...state, itemsLoading: false, items: action.payload };
  }

  return state;
};

export default reducer;
