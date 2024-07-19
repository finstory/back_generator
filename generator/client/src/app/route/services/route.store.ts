export default interface RouteState {
  endpointPanel: {
    moduleEditorOpen: boolean;
    moduleSelected: string;
  };
  name: string;
}

export const route: RouteState = {
  name: "user",
  endpointPanel: {
    moduleEditorOpen: false,
    moduleSelected: "some",
  }
};
