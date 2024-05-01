import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface UserState {
  user: {
    id: number;
    name: string;
    password: string;
  };
  is_login: true;
}

export const userState: UserState = {
  user: {
    id: 1657,
    name: "facu",
    password: "123",
  },
  is_login: true,
};
