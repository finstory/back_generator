import { IModule } from "./_interfaces/module.interface";

export default interface ModuleState {
  modulesList: IModule[];
  loading: boolean;
}

export const module: ModuleState = {
  modulesList: [
    {
      moduleName: "user",
      routes: [
        {
          id: "13a52111-72b4-4648-ae8b-cb864fd18793",
          endpoint: "/create",
          method: "post",
          description: "Write a description here...",
          controllerName: "postUserCreate",
          middlewares: ["Token", "+"],
          params: [],
          query: [{
            key: "id",
            type: "UUID",
            elementType: "",
            optional: true,
            value: "ER334WE"
          }],
          body: [
            {
              key: "id",
              type: "UUID",
              elementType: "",
              optional: true,
              value: "ER334WE"
            },
            {
              key: "first_name",
              type: "string",
              elementType: "facundo",
              optional: true,
              value: null
            },
            {
              key: "password",
              type: "string",
              elementType: "",
              optional: true,
              value: "2329Icx/"
            },
            {
              key: "age",
              type: "number",
              elementType: "",
              optional: false,
              value: "32"
            }
          ],
          response_body: []
        }
      ]
    }
  ],
  loading: true,
};