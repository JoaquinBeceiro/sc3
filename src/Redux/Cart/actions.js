import types from "./types";
import { store } from "../Store";

const addToCart = item => dispatch => {
  const { cart } = store.getState().cart;
  const skuExist = cart.find(i => i.sku.toString() === item.sku.toString());

  if (skuExist) {
    const newCart = cart.map(i => {
      const newQuantity =
        i.sku.toString() === item.sku.toString()
          ? i.quantity + item.quantity
          : i.quantity;
      return {
        ...i,
        quantity: newQuantity
      };
    });
    dispatch(update(newCart));
  } else {
    dispatch(add(item));
  }
};

const removeFromCart = index => ({
  type: types.CART_REMOVE,
  index
});
const clear = () => ({ type: types.CART_CLEAR });

const add = item => ({
  type: types.CART_ADD,
  item
});

const update = cart => ({
  type: types.CART_UPDATE,
  cart
});

export default {
  addToCart,
  removeFromCart,
  clear
};
