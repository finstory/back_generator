import { ammonia, yesterdayAmmonia, differentAmmonia } from "../helpers/automatic"

export default [
    {
        name: "Amoniaco",
        value_media: ammonia(),
        value_media_metric: "ppm",
        icon: "",
        different: differentAmmonia(),
        yesterday: yesterdayAmmonia(),
        yesterday_metric: "ppm",
    }
]