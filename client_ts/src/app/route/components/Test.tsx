import S from '@/_common/config/services45}';
import { Button, Text } from '@/components';


import React, { FC } from 'react';

interface IProps {
  _scss: CSSModuleClasses;
}

const Test: FC<IProps> = ({ _scss }) => {

  return (
    <div className={_scss.sdsd}>
      <Text label='span' ></Text>
      <Button variant='circle_one_char'> sd</Button>
    </div>
  );
};

export default Test;