import {
  carbonDioxide,
  yesterdayCarbonDioxide,
  differentCarbonDioxide,
} from "../helpers/automatic";

export default [
  {
    name: "Dioxido de carbono",
    value_media: carbonDioxide(),
    value_media_metric: "ppm",
    icon: "",
    different: differentCarbonDioxide(),
    yesterday: yesterdayCarbonDioxide(),
    yesterday_metric: "ppm",
  },
];
