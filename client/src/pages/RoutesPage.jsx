import { useEffect, useState } from "react";
import useRouteServices from "../services/useRouteServices";
import { EndpointPanel } from "../components/Routes/EndpointPanel/_index";
import { RequestPanel } from "../components/Routes/RequestPanel/RequestPanel";



export const RoutesPage = () => {
  const { getAllRoutes } = useRouteServices();

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div className={"main_container"}>
      <EndpointPanel />
      <RequestPanel />
    </div>
  );
};
