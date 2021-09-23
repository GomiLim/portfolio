import React from 'react';
import './index.less';
import {
  ROOT,
  ROOT_COMPANY,
  ROOT_CONTACT,
  ROOT_FAQ,
  ROOT_ORDER
} from 'routes/const';
import { CommonTextButton } from 'components';
import { CartButton, LogoButton } from 'containers';
import { historyPush, capitalize } from 'libs';

export const MainHeader = props => {
  const headerItems = [
    {
      moveToPage: () => historyPush(ROOT),
      title: 'Home'
    },
    {
      moveToPage: () => historyPush(ROOT_COMPANY),
      title: capitalize(ROOT_COMPANY)
    },
    {
      moveToPage: () => historyPush(ROOT_CONTACT),
      title: capitalize(ROOT_CONTACT)
    },
    {
      moveToPage: () => historyPush(ROOT_FAQ),
      title: capitalize(ROOT_FAQ)
    },
    {
      moveToPage: () => historyPush(ROOT_ORDER),
      title: capitalize(ROOT_ORDER)
    }
  ];

  return (
    <div>
      <LogoButton />
      <div>
        {headerItems.map(headerItem => {
          return (
            <CommonTextButton onClick={headerItem.moveToPage}>
              {headerItem.title}
            </CommonTextButton>
          );
        })}
        <CartButton />
      </div>
    </div>
  );
};
