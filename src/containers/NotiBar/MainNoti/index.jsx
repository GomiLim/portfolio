import React from 'react';

export const MainNoti = props => {
  const { showCount } = props;

  return (
    <button>
      <i class='fas fa-shopping-cart gnb-cart-img'></i>
      {showCount && <span class='gnb-cart-shpping-count'></span>}
    </button>
  );
};
