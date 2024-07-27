import { IModule } from "../_interfaces/module.interface";

export default interface ModuleState {
  name: { test: string };
  modulesList: IModule[];
  loading: boolean;
}

export const module: ModuleState = {
  name: { test: "module" },
  modulesList: [],
  loading: true,
};