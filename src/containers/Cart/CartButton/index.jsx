import React from 'react';
import './index.less';
import { historyPush } from 'libs';
import { CommonButton } from 'components';

export const CartButton = props => {
  const { showCount } = props;

  const moveToCartPage = () => {
    return historyPush('/cart');
  };

  return (
    <CommonButton name='cart' type='primary' onClick={moveToCartPage}>
      <i class='fas fa-shopping-cart gnb-cart-img'></i>
      {showCount && <span class='gnb-cart-shpping-count'></span>}
    </CommonButton>
  );
};
