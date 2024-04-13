import { DoubleBorderGradient } from "../utilities/DoubleBorderGradient";
import { useEffect, useState } from "react";
import { BorderGradient } from "../utilities/BorderGradient";
import useRouteServices from "../services/useRouteServices";

import AceEditor from "react-ace";
// import "brace/mode/javascript";
// import "brace/theme/tomorrow";

export const Dashboard = () => {
  const {
    route: { endpoint_list },
    getAllRoutes,
  } = useRouteServices();

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div className="main_container">
      <div>
        <h1>Using React-Ace</h1>
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          name="editor"
          value={this.props.data}
          fontSize={14}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      {/* <DoubleBorderGradient
        effectHeight="51rem"
        effect={true}
        className="routes"
        borderRadius="2rem"
        borderSize="2px"
        borderBetween="2px"
      >
        <div className="panel">
          <div className="title">
            <p>ENDPOINTS</p>
            <BorderGradient className="add_route" borderSize="2px">
              <p>+</p>
            </BorderGradient>
          </div>

          <div className="endpoint_dir">
            {endpoint_list.map((route) => (
              <div key={route.module} className="module">
                <div className="module_name">
                  <div className="marker"></div> {route.module.toUpperCase()}
                </div>

                {route.routesList.map((item) => (
                  <div key={item.id} className="endpoint">
                    <div className="marker"></div> {item.endpoint.toUpperCase()}
                    <span> - </span> {item.method.toUpperCase()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </DoubleBorderGradient> */}
    </div>
  );
};
