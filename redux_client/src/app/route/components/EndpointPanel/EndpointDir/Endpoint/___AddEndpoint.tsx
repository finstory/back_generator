import { Button, Input, Mark, Text } from "@/components";
import React, { FC, useState } from "react";

import { RequestType } from "@/app/route/_interfaces/routes.interface";
import RequestTypeSelector from "./___RequestTypeSelector";
import S from "@/_common/services/main.service";
import { useForm } from "@/_common/hooks/useForm";
import { checkFormatEndpoint } from "@/app/route/utils/check-format-endpoint";

interface IProps {
  _scss: CSSModuleClasses;
  active: (active: boolean) => void;
  moduleName: string;
}
interface IValues {
  endpoint_input: string;
  request_type_input: RequestType;
}

const AddEndpoint: FC<IProps> = ({ _scss, moduleName, active }) => {

  const { addRoute } = S.route;
  const { values, handleInputChange, reset } = useForm<IValues>({ endpoint_input: "", request_type_input: "get" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { endpoint_input, request_type_input } = values;
    const route = {
      endpointName: endpoint_input,
      requestType: request_type_input
    };

    checkFormatEndpoint(endpoint_input);
    addRoute(moduleName, route);
    reset();
    active(false);
  }

  return (
    <div className={_scss.endpoint}>
      <form className={_scss.wrap_editor} onSubmit={(e) => handleSubmit(e)}>

        <Mark variant="bar" />
        <Input width="rem" placeholder={"/route_name..."} name="endpoint_input" onChange={handleInputChange} value={values.endpoint_input} />
        <RequestTypeSelector _scss={_scss} onChange={handleInputChange} values={values} requestType={values.request_type_input} />
        <Button type="submit">Save</Button>
        <Button width="4rem" variant="default" onClick={() => { active(false) }}>X</Button>

      </form>
    </div>
  );
};

export default AddEndpoint;