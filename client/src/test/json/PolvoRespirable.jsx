import { respirableDust, yesterdayRespirableDust, differentRespirableDust } from "../helpers/automatic"

export default [
    {
        name: "Polvo respirable",
        value_media: respirableDust(),
        value_media_metric: "ppm",
        icon: "",
        different: differentRespirableDust(),
        yesterday: yesterdayRespirableDust(),
        yesterday_metric: "ppm"
    }
]