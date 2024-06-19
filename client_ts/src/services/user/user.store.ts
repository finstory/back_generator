export default interface UserState {
  credential: {
    id: number;
    name: string;
    password: string;
  };
  is_login: true;
}

export const user: UserState = {
  credential: {
    id: 1657,
    name: "facu",
    password: "123",
  },
  is_login: true,
};
