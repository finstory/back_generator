export default interface RouteState {
  endpointPanel: {
    moduleEditorOpen: boolean;
    moduleSelected: string;
  };
}

export const route: RouteState = {
  endpointPanel: {
    moduleEditorOpen: false,
    moduleSelected: "some",
  }
};
