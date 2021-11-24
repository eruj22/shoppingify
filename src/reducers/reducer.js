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

  if (action.type === "DELETE_ITEM") {
    const tempItems = state.items.filter((item) => item._id !== action.payload);
    return { ...state, items: tempItems };
  }

  if (action.type === "OPEN_ITEM_DETAILS") {
    const selectedItem = state.items.filter(
      (item) => item._id === action.payload
    );
    return { ...state, showItemDetails: true, singleItemDetails: selectedItem };
  }

  if (action.type === "CLOSE_ITEM_DETAILS") {
    return { ...state, showItemDetails: false };
  }

  if (action.type === "ADD_ITEM_TO_LIST") {
    return { ...state };
  }

  return state;
};

export default reducer;
