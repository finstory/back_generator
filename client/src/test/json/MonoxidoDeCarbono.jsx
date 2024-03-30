import { carbonMonoxide, differentCarbonMonoxide, yesterdayCarbonMonoxide } from "../helpers/automatic"

export default [
{
    name: "Monoxido de carbono",
    value_media: carbonMonoxide(),
    value_media_metric: "ppm",
    icon: "",
    different: differentCarbonMonoxide(),
    yesterday: yesterdayCarbonMonoxide(),
    yesterday_metric: "ppm"
}
]