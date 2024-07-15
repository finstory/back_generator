import React, { FC } from "react";
import { Button, Input, Mark } from "@/components";
import S from "@S";
import { useForm } from "@/_common/hooks/useForm";

interface IProps {
  _scss: CSSModuleClasses;
  moduleName: string;
  active: (active: boolean) => void;
}
const RenameModule: FC<IProps> = ({ _scss, moduleName, active }) => {
  const { renameModule } = S.module;
  const { toggleModuleEditor } = S.route;
  const { values, handleInputChange, reset } = useForm({ module_input: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { module_input } = values;
    e.preventDefault();
    renameModule(moduleName, module_input);
    reset();
    toggleModuleEditor();
  }
  return (
    <form className={_scss.rename_module} onSubmit={(e) => handleSubmit(e)}>
      <Mark />
      <Input width="24rem" placeholder="New Name..." name="module_input" onChange={handleInputChange} />
      <Button type="submit">Rename</Button>
      <Button width="4rem" variant="default" onClick={() => { active(false) }}>X</Button>
    </form>
  );
};

export default RenameModule;