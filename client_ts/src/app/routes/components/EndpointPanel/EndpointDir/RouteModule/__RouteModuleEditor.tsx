import React, { FC } from "react";
import { Button, Input, Mark } from "@/components";

interface IProps {
  _scss: any;
  active?: boolean;
  mode?: string;
  moduleName?: string;
  setEditMode?: () => void;
}

export const RouteModuleEditor: FC<IProps> = ({ _scss }
) => {

  return (
    <form className={_scss.module_edit}>
      <Mark />
      <Input width="32rem" placeholder="Route Module Name" />
      <Button>Add</Button>
    </form>
  );
};

const childrenProps = ({ scss }) => {
  return {};
};
