const list_reducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_LIST") {
    const { amount, name } = action.payload;
    const tempItem = state.shoppingList.find(
      (item) => item.name === action.payload.name
    );

    if (tempItem) {
      const tempList = state.shoppingList.map((listItem) => {
        if (listItem.name === name) {
          let newAmount = listItem.amount + amount;
          return { ...listItem, amount: newAmount };
        } else {
          return { ...listItem };
        }
      });
      return { ...state, shoppingList: tempList };
    } else {
      const newItem = {
        ...action.payload,
      };

      return { ...state, shoppingList: [...state.shoppingList, newItem] };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const tempList = state.shoppingList.filter(
      (item) => item.name !== action.payload
    );
    return { ...state, shoppingList: tempList };
  }

  if (action.type === "CLEAR_LIST") {
    return { ...state, shoppingList: [] };
  }

  if ((action.type = "TOGGLE_ITEM_AMOUNT")) {
    const { itemName, amount } = action.payload;
    const tempList = state.shoppingList.map((item) => {
      if (item.name === itemName) {
        let newAmount;
        if (amount === "inc") {
          newAmount = item.amount + 1;
        }
        if (amount === "dec") {
          newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, shoppingList: tempList };
  }

  return { ...state };
};

export default list_reducer;
