import React, { FC } from 'react';

interface IProps {
  _scss: CSSModuleClasses;
}

const Test: FC<IProps> = ({ _scss }) => {
  return (
    <div className={_scss.sdsd}>
      Test
    </div>
  );
};

export default Test;