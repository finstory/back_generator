import { useRedux } from "../redux/reducer/useRedux";
import api from "./../../helpers/axios";

export const routeReducer = {
  endpointList: [],
  error_login: false,
  logged: false,
};

const useRouteServices = () => {
  const { route, setRoute } = { ...useRedux("route") };
  const services = { route, setRoute };

  services.getAllRoutes = async () => {
    const response = await api.get("endpoint/all");
    setRoute({ endpointList: response.data });
  };

  return services;
};

export default useRouteServices;
