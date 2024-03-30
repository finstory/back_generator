import { differentAir, speedAir, yesterdayAir } from "../helpers/automatic";




export default [
    {
    name: "Velocidad del aire",
    value_media: speedAir(),
    value_media_metric: "km/h",
    icon: "https://previews.123rf.com/images/khurshidek/khurshidek2304/khurshidek230400017/202305468-icono-de-nubes-de-viento-pron%C3%B3stico-del-tiempo-pictograma-icono-de-viento-viento-soplando-clima.jpg",
    different: differentAir(),
    yesterday: yesterdayAir(),
    yesterday_metric: "km/h"
}
];
