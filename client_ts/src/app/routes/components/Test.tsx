import S from '@/_config/services';
import { Button, Text } from '@/components';


import React, { FC } from 'react';

interface IProps {
  _scss: CSSModuleClasses;
}

const Test: FC<IProps> = ({ _scss }) => {

  return (

    <div className={_scss.sdsd}>
      <Text label="h2" color="delete"></Text>
      <Button variant='get'> sd</Button>
    </div>
  );
};

export default Test;