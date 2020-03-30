import types from "./types";

const initialState = {
  cart: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD:
      const newCarAdd = [...state.cart];
      newCarAdd.push(action.item);
      return {
        ...state,
        cart: newCarAdd
      };
    case types.CART_UPDATE:
      return {
        ...state,
        cart: action.cart
      };
    case types.CART_REMOVE:
      const newCarRemove = [...state.cart];
      newCarRemove.splice(action.index, 1);
      return {
        ...state,
        cart: newCarRemove
      };
    case types.CART_CLEAR:
      return {
        initialState
      };
    default:
      return state;
  }
};

export default cart;
