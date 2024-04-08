import { useEffect, useState } from "react";
import useRouteServices from "../services/useRouteServices";
import { EndpointPanel } from "../components/Routes/EndpointPanel/EndpointPanel";

export const RoutesPage = () => {
  const { getAllRoutes } = useRouteServices();

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div className={"main_container"}>
      <EndpointPanel />
    </div>
  );
};
