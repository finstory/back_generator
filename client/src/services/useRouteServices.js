import useToast from "../hooks/useToast";
import { useRedux } from "../redux/reducer/useRedux";
import api from "./../../helpers/axios";

export const routeReducer = {
  endpoint_list: [],
  controllers_list: [],
};

const useRouteServices = () => {
  const { printAlert, alertConfirm } = useToast();

  const { route, setRoute } = { ...useRedux("route") };
  const services = { route, setRoute };

  services.getAllRoutes = async () => {
    const response = await api.get("endpoint/all");
    setRoute({
      endpoint_list: response.data.reverse().map((route) => {
        return {
          ...route,
          routesList: route.routesList.reverse()
        }
      })
    });

  };

  services.createRouteModule = async (routeModule) => {
    if (!routeModule) return;
    try {
      const response = await api.post("endpoint/module", { routeModule });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  };

  services.editRouteModule = async (routeModule, newRouteModule) => {
    if (!routeModule || !newRouteModule) return;
    try {
      const response = await api.patch("endpoint/module", { routeModule, newRouteModule });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  };

  services.deleteRouteModule = async (routeModule) => {
    try {
      const response = await api.delete("endpoint/module", { data: { routeModule } });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  };

  services.deleteEndpoint = async (id, routeModule, controllerName) => {
    try {
      const includeController = await alertConfirm("Include Controller?");

      const response = await api.delete("endpoint", { data: { id, routeModule, controllerName, includeController } });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {

      // printAlert(error.response.data.payload || error.massage, "error");
    }
  };

  services.editEndpoint = async (id, routeModule, newEndpoint, newMethod, controllerName) => {
    try {
      const response = await api.patch("endpoint", { id, routeModule, newEndpoint, newMethod, controllerName });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  }

  services.addEndpoint = async (routeModule, endpoint, method) => {
    try {
      console.log(routeModule)
      const response = await api.post("endpoint", { routeModule, endpoint, method });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  }

  services.getControllerIndex = async (routeModule, controllerName) => {

    const response = await api.get("controller/line", { params: { routeModule, controllerName } });
    return response.data;
  }

  return services;
};

export default useRouteServices;
