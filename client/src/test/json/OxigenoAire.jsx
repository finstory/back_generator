import { yesterdayOxigen, oxygenInAirMedia, differentOxigen } from "../helpers/automatic"


export default [
    {
        name: "Oxigeno en el aire",
        value_media: oxygenInAirMedia(),
        value_media_metric: "%",
        icon: "",
        different: differentOxigen(),
        different_metric: "%",
        yesterday: yesterdayOxigen(),
        yesterday_metric: "%"
    }
]