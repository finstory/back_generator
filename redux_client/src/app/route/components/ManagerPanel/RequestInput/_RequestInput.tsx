import { featureNotAvailable } from '@/_common/_plugins/toast-alerts';
import { BGradient, Button, Input, Text } from '@/components';
import { routeSelector, selectRoute } from '@/integrations/redux/slices/route.slice';
import { userSelector } from '@/integrations/redux/slices/user.slice';
import { RootState } from '@/integrations/redux/store';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IProps {
  _scss: CSSModuleClasses;
}

const RequestInput: FC<IProps> = ({ _scss }) => {
  const moduleName = useSelector<RootState>(state => state.route.routeManager.moduleName) as RootState["route"]["routeManager"]["moduleName"];
  const route = selectRoute.findRouteSelector();
  const [queryParams, setQueryParams] = useState("");

  const transformParams = () => {
    let paramsGetting = "";
    if (route?.query && route.query)
      route?.query?.forEach((param, i) => {
        if (route.query && i === route.query.length - 1)
          paramsGetting += `${param.name}=value`;
        else
          paramsGetting += `${param.name}=value&`;
      });
    setQueryParams(paramsGetting);
  }
  useEffect(() => {
    transformParams();
  }, [route]);

  if (route)
    return (
      <div className={_scss.request_input}>
        <Input value={`/${moduleName}${route.endpointName}${queryParams.length > 0 ? `?${queryParams}` : ""}`}
          width="35rem" variant='off' readOnly={true} />
        <BGradient className={_scss.send_btn} onClick={featureNotAvailable}><Text label="p">SEND </Text></BGradient>
      </div>
    );
};

export default RequestInput;