import React from 'react';

export const CommonTextButton = props => {
  const { name = '', onClick, type = 'praimary', children } = props;

  return (
    <button className={`${name} ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
