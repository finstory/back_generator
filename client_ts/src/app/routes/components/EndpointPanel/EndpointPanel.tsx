import DGBorder from "@/components/Wrapper/Panels/DGBorder";
import scss from "@routes/_scss/endpoint_panel.module.scss";
import { Title } from "./Title/_Title";
import { EndpointDir } from "./EndpointDir/_EndpointDir";
import Button from "@/components/Atoms/Button/Button";

import Text from "@/components/Atoms/Text/Text";


export const EndpointPanel = () => {

  const props = childrenProps({});

  return (
    <>
      {/* <Input width="20rem" placeholder="faceu" color="var(--color-base)" /> */}
      <DGBorder className={scss.endpoint_panel}
        {...props.endpoint_panel}
      >
        <Text
          label="p" family="secondary" color="primary" size="large">
          hello
        </Text>
        {/* <Button variant="circle_one_char"><p>+</p></Button> */}
        <div className={scss.panel}>
          <Title _scss={scss} />
          {/* <EndpointDir {...props._scss} /> */}
        </div>
      </DGBorder>
    </>
  );
};

const childrenProps = ({ }) => {

  return {
    endpoint_panel: {
      effectHeight: "51rem",
      effect: true,
      borderRadius: "2rem",
      borderSize: "2px",
      borderBetween: "3px",
    },

    route_module_editor: {
      borderSize: "2px",
      onClick: () => { },
    },
  };
};
