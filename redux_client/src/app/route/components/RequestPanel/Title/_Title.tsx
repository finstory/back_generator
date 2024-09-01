
import S from "@/services/main.service";
import { Button, Text } from "@/components";


export const Title = ({ _scss }) => {

  return (
    <div className={_scss.title}>

      <Text label="h2" size="medium" fontWeight="300" title="Endpoint Name">DOCUMENTATION</Text>

    </div>
  );

};
