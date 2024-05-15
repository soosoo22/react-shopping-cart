import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartItemQuantityState, cartData } from '../../recoil/atoms';
import { patchCartItem, removeCartItem } from '../../api';

import CheckBox from '../CheckBox/CheckBox';
import { Button, CountButton } from '../Button';
import {
  Img,
  ProductItemStyle,
  ProductItemTop,
  ProductItemBundle,
} from './ProductItem.style';

export default function ProductItem({ cartItem }: { cartItem: Cart }) {
  const [quantity, setQuantity] = useRecoilState(
    cartItemQuantityState(cartItem.id),
  );
  const setCart = useSetRecoilState(cartData);

  const handleIncrement = async () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      patchCartItem(cartItem.id, newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = async () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      patchCartItem(cartItem.id, newQuantity);
      return newQuantity;
    });
  };

  const handleRemoveCartItem = () => {
    removeCartItem(cartItem.id).then(() => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== cartItem.id));
    });
  };

  return (
    <ProductItemStyle>
      <ProductItemTop>
        <CheckBox />
        <Button text="삭제" onClick={handleRemoveCartItem} />
      </ProductItemTop>
      <ProductItemBundle>
        <Img
          src={cartItem.product.imageUrl}
          alt={`${cartItem.product.name}의 상품 사진`}
          className="product-item_img"
        />
        <div className="product-item_content">
          <span className="product-item_content_name">
            {cartItem.product.name}
          </span>
          <span className="product-item_content_price">
            {cartItem.product.price}원
          </span>
          <div className="product-item_content_amount-bundle">
            <CountButton type="minus" onClick={handleDecrement} />
            <span className="product-item_content_amount">{quantity}</span>
            <CountButton type="plus" onClick={handleIncrement} />
          </div>
        </div>
      </ProductItemBundle>
    </ProductItemStyle>
  );
}
