import React, { FC } from "react";
import { useForm } from "@/_common/hooks/useForm";
import { Button, Input, Mark, Text } from "@/components";
import S from "@S";

interface IProps {
  _scss: CSSModuleClasses;
  active: (active: boolean) => void;
  route: any;
}
const EndpointEditor: FC<IProps> = ({ _scss, route, active }) => {
  const { renameModule } = S.module;
  const { toggleModuleEditor } = S.route;
  const { values, handleInputChange, reset } = useForm({ endpoint_input: "", request_type_input: "" });
  console.log(route.requestType)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { module_input } = values;
    e.preventDefault();
    reset();
    toggleModuleEditor();
  }

  return (
    <form className={_scss.wrap_editor} onSubmit={(e) => handleSubmit(e)}>
      <Mark variant="bar" />
      <select
        name="request_type_input"
        onChange={handleInputChange}
        style={{
          color: values.request_type_input ? `var(--color-${values.request_type_input})` : `var(--color-${route.requestType})`
        }}
        value={values.request_type_input || route.requestType}
      >
        <option value="get">
          GET
        </option>
        <option value="post">
          POST
        </option>
        <option value="put">
          PUT
        </option>
        <option value="delete">
          DELETE
        </option>

      </select>
      <Input width="18rem" placeholder="New Name..." name="endpoint_input" onChange={handleInputChange} />
      <Button type="submit">Save</Button>
      <Button width="4rem" variant="default" onClick={() => { active(false) }}>X</Button>
    </form>
  );
};

export default EndpointEditor;