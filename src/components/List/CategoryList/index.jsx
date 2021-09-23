import React from 'react';
import './index.less';

export const CategoryList = props => {
  const { itemTitle, itemList, onClick, path, listType = '' } = props;

  return (
    <ul className={listType}>
      <li>{itemTitle}</li>
      {itemList.map((item, idx) => (
        <li
          key={`${item}-${idx}`}
          onClick={() => onClick ? onClick(path ? `/${path}` : `/${item}`) : null}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
