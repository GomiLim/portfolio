import React from 'react';
import './index.scss';

import { historyPush } from 'libs';
import { CommonButton } from 'components';
import { common } from 'imports';

export const LogoButton = props => {
  const { size = 'is-55' } = props;

  const goHome = () => {
    return historyPush('/');
  };

  return (
    <CommonButton name={`gnb-logo `} onClick={goHome}>
      <h1>
        <img className={`${size}`} src={common.LOGO} alt='카페 플라워' />
      </h1>
    </CommonButton>
  );
};
