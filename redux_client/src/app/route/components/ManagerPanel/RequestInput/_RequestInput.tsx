import { featureNotAvailable } from '@/_common/_plugins/toast-alerts';
import { BGradient, Button, Input, Text } from '@/components';
import React, { FC } from 'react';

interface IProps {
  _scss: CSSModuleClasses;
}

const RequestInput: FC<IProps> = ({ _scss }) => {
  return (
    <div className={_scss.request_input}>
      <Input defaultValue="/user/email:id=23" width="35rem" />
      <BGradient className={_scss.send_btn} onClick={featureNotAvailable}><Text label="p">SEND </Text></BGradient>
    </div>
  );
};

export default RequestInput;