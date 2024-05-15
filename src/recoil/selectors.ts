import { selector } from 'recoil';
import { cartData, cartItemCheckState } from './atoms';

export const allCartItemsCheckState = selector<boolean>({
  key: 'allCartItemsCheckState',
  get: ({ get }) => {
    const cart = get(cartData);
    return cart.every((cartItem) => get(cartItemCheckState(cartItem.id)));
  },
  set: ({ set, get }, newValue) => {
    const cart = get(cartData);
    cart.forEach((cartItem) => {
      set(cartItemCheckState(cartItem.id), newValue);
    });
  },
});

export const checkedCartItems = selector({
  key: 'checkedCartItems',
  get: ({ get }) => {
    const cart = get(cartData);
    const isCheckedCartItems = cart.filter((cartItem) =>
      get(cartItemCheckState(cartItem.id)),
    );
    return isCheckedCartItems;
  },
});

export const calculateOrderPrice = selector<number>({
  key: 'calculateOrderPrice',
  get: ({ get }) => {
    const checkedCart = get(checkedCartItems);
    const totalOrderPrice = checkedCart.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    );

    return totalOrderPrice;
  },
});
