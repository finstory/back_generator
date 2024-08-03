export default interface RouteState {
  endpointPanel: {
    moduleEditorOpen: boolean;
    moduleSelected: string;
  };
  name: string;
  routeManager: {
    status: "ok" | "loading";
    paramsSelected: "params" | "query" | "body" | "bodyResponse";
    moduleName: string;
    routeId: string;
  };
}

export const route: RouteState = {
  name: "user",
  endpointPanel: {
    moduleEditorOpen: false,
    moduleSelected: "some",
  },
  routeManager: {
    status: "ok",
    paramsSelected: "params",
    moduleName: "",
    routeId: "",
  }
};
