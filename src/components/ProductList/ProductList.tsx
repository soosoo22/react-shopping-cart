import { useRecoilState, useRecoilValue } from 'recoil';
import { cartData } from '../../recoil/atoms/atoms';
import { allCartItemsCheckState } from '../../recoil/selectors/selectors';

import CheckBox from '../CheckBox/CheckBox';
import ProductItem from '../ProductItem/ProductItem';
import ProductTotalPriceList from '../ProductTotalPriceList/ProductTotalPriceList';
import { ProductListStyle, ProductItemWrapper } from './ProductList.style';

export default function ProductList() {
  const cart = useRecoilValue(cartData);

  const [isAllCheck, setIsAllCheck] = useRecoilState(allCartItemsCheckState);

  const handleToggleAllCheck = () => {
    setIsAllCheck(!isAllCheck);
  };

  return (
    <ProductListStyle>
      <CheckBox text="전체선택" isCheck={isAllCheck} onClick={handleToggleAllCheck} />

      <ProductItemWrapper>
        {cart.map((cartItem) => {
          return <ProductItem isCheckBox={true} cartItem={cartItem} key={cartItem.id} />;
        })}
      </ProductItemWrapper>
      <ProductTotalPriceList />
    </ProductListStyle>
  );
}
