import { useRecoilState } from 'recoil';
import { checkedCouponsState } from '../../../recoil/atoms/atoms';

import CheckBox from '../../CheckBox/CheckBox';
import { formatDate, formatTime } from '../../../utils/format';
import { Coupon } from '../../../types/coupon';
import { CouponBox, CouponDetails } from './CouponItem.style';

export default function CouponItem({ coupon, isCouponApplicable }: { coupon: Coupon; isCouponApplicable: boolean }) {
  const [checkedCoupons, setCheckedCoupons] = useRecoilState(checkedCouponsState);
  const isCouponChecked = checkedCoupons.includes(coupon);

  const handleCheckboxChange = () => {
    setCheckedCoupons((prev) =>
      isCouponChecked ? prev.filter((item) => item.code !== coupon.code) : [...prev, coupon],
    );
  };

  return (
    <CouponBox isCouponCheck={isCouponApplicable}>
      <CheckBox
        text={coupon.description}
        isCheck={isCouponChecked}
        onClick={isCouponApplicable ? handleCheckboxChange : () => {}}
      />

      <CouponDetails>
        <span>만료일: {formatDate(coupon.expirationDate)}</span>
        {coupon.minimumAmount && <span>최소 주문 금액: {`${coupon.minimumAmount.toLocaleString()}원`}</span>}
        {coupon.availableTime && (
          <span>
            사용 가능 시간:
            {` 오전 ${formatTime(coupon.availableTime.start)}시부터 ${formatTime(coupon.availableTime.end)}시까지`}
          </span>
        )}
      </CouponDetails>
    </CouponBox>
  );
}
