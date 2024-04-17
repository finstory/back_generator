import { User } from "./../../../../../test/api";

//REQUEST TYPES:

interface User {
  id: string;
  last_name: {
    id: number;
  };
}

type params = {
  //KEY_1
  id: string;
  //KEY_2
  user: User;
  //END
};

type query = {
  id_team: string;
  name: string;
};

type body = {
  team: {};
};

type response_body = {
  name: string;
  id: number;
};

//BODY TO SEND:

const body: body = {
  team: "",
};