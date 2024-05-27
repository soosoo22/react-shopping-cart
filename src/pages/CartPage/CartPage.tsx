import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import { FloatingButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { checkedCartItems } from '../../recoil/selectors/selectors';

export default function CartPage() {
  const navigate = useNavigate();

  const cartItems = useRecoilValue(checkedCartItems);

  return (
    <div id="app">
      <Header
        imgType="logo"
        onClick={() => {
          navigate('/');
        }}
      />
      <Cart />
      <FloatingButton
        text="주문 확인"
        isDisable={cartItems.length ? false : true}
        onClick={() => {
          cartItems.length && navigate('/order-confirm', { state: { cartItems } });
        }}
      />
    </div>
  );
}
