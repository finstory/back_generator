import React, { FC } from "react";
import { Button, Input, Mark } from "@/components";
import S from "@S";
import { useForm } from "@/_common/hooks/useForm";

interface IProps {
  _scss: any;
  active?: boolean;
  mode?: string;
  moduleName?: string;
  setEditMode?: () => void;
}

export const RouteModuleEditor: FC<IProps> = ({ _scss }) => {
  const { addModule } = S.module;
  const { toggleModuleEditor } = S.route;
  const { values, handleInputChange, reset } = useForm({ module_input: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { module_input } = values;
    e.preventDefault();
    addModule(module_input);
    reset();
    toggleModuleEditor();
  }
  return (
    <form className={_scss.module_edit} onSubmit={(e) => handleSubmit(e)}>
      <Mark />
      <Input width="32rem" placeholder="Route Module Name" name="module_input" onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </form>
  );
};

const childrenProps = ({ scss }) => {
  return {};
};
