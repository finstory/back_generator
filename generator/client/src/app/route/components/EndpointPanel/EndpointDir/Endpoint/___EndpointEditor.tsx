import { Button, Input, Mark, Text } from "@/components";
import React, { FC, useState } from "react";

import { RequestType } from "@/app/route/_interfaces/routes.interface";
import RequestTypeSelector from "./___RequestTypeSelector";
import S from "@S";
import { useForm } from "@/_common/hooks/useForm";
import { checkFormatEndpoint } from "@/app/route/utils/check-format-endpoint";

interface IProps {
  _scss: CSSModuleClasses;
  active: (active: boolean) => void;
  route: any;
  moduleName: string;
}
interface IValues {
  endpoint_input: string;
  request_type_input: RequestType;
}

const EndpointEditor: FC<IProps> = ({ _scss, moduleName, route, active }) => {

  const { editRoute } = S.route;
  const { values, handleInputChange, reset } = useForm<IValues>(
    { endpoint_input: route.endpointName, request_type_input: route.requestType }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { endpoint_input, request_type_input } = values;
    const newRoute = { endpointName: endpoint_input, requestType: request_type_input };
    e.preventDefault();
    checkFormatEndpoint(endpoint_input);
    editRoute(moduleName, route, newRoute);
    reset();
    active(false);
  }

  return (
    <form className={_scss.wrap_editor} onSubmit={(e) => handleSubmit(e)}>

      <Mark variant="bar" />
      <Input width="rem" placeholder={route.endpointName} name="endpoint_input" onChange={handleInputChange} value={values.endpoint_input || route.endpointName} />
      <RequestTypeSelector _scss={_scss} onChange={handleInputChange} values={values} requestType={route.requestType} />
      <Button type="submit">Save</Button>
      <Button width="4rem" variant="default" onClick={() => { active(false) }}>X</Button>

    </form>
  );
};

export default EndpointEditor;