//% /user/friend/:id

interface ReqBody {
  name: string;
  version: number;
  description: string;
  main: string;
}

const body_example: ReqBody = {
  name: "hello",
  version: 1,
  description: "Hello world",
  main: "index.js",
};

