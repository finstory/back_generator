import { useEffect, useState } from "react";
import useRouteServices from "../services/useRouteServices";
import { EndpointPanel } from "../components/Routes/EndpointPanel/_index";
import { RequestPanel } from "../components/Routes/RequestPanel/RequestPanel";
import { ManagerPanel } from "../components/Routes/ManagerPanel/ManagerPanel";

export const RoutesPage = () => {
  const { getAllRoutes } = useRouteServices();

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div className={"main_container"}>
      <EndpointPanel />
      <RequestPanel />
      <ManagerPanel />
    </div>
  );
};
