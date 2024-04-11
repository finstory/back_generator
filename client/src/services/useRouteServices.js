import useToast from "../hooks/useToast";
import { useRedux } from "../redux/reducer/useRedux";
import api from "./../../helpers/axios";
import toast, { Toaster } from 'react-hot-toast';

export const routeReducer = {
  endpointList: [],
};

const useRouteServices = () => {
  const { printAlert } = useToast();
  const { route, setRoute } = { ...useRedux("route") };
  const services = { route, setRoute };

  services.getAllRoutes = async () => {
    const response = await api.get("endpoint/all");
    setRoute({
      endpointList: response.data.reverse().map((route) => {
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

  services.deleteEndpoint = async (id, routeModule) => {
    try {
      const response = await api.delete("endpoint", { data: { id, routeModule } });
      if (response) await services.getAllRoutes();
      printAlert(response.data);
    } catch (error) {
      printAlert(error.response.data.payload || error.massage, "error");
    }
  };

  services.editEndpoint = async (id, routeModule, newEndpoint, newMethod, newControllerName) => {
    try {
      const response = await api.patch("endpoint", { id, routeModule, newEndpoint, newMethod });
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

  return services;
};

export default useRouteServices;
