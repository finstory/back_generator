import { Alertas } from "../components/Dashboard/Alertas/Alertas";
import { Dispositivos } from "../components/Dashboard/Dispositivos/Dispositivos";
import { Home } from "../components/Dashboard/Home/Home";
import {
  Climatización,
  Abastecimiento,
  GestiónDeResiduos,
  Movimiento,
} from "../components/Dashboard/Infrastructura/_index";
import { Alimentación } from "../components/Dashboard/Productividad/Alimentación";
import { ProductoFinal } from "../components/Dashboard/Productividad/ProductoFinal";
import { SaludAnimal } from "../components/Dashboard/Productividad/SaludAnimal";

export default [
  {
    id: "dashboard",
    title: "Mi Dashboard",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821374/Agro/SlideMenu/icons/SVGRepo_iconCarrier_e6b1av.svg",
    subMenus: [{ id: "dashboard_info", name: "Información", comp: <Home /> }],
    // date : Math.random() * 1000,
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821400/Agro/SlideMenu/icons/Svg_Infraestructura_2_ksmeem.svg",
    subMenus: [
      { id: "climatización", name: "Climatización", comp: <Climatización /> },
      {
        id: "abastecimiento",
        name: "Abastecimiento",
        comp: <Abastecimiento />,
      },
      { id: "movimiento", name: "Movimiento", comp: <Movimiento /> },
      {
        id: "gestión_de_residuos",
        name: "Gestión de Residuos",
        comp: <GestiónDeResiduos />,
      },
    ],
  },
  {
    id: "productividad",
    title: "Productividad",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821423/Agro/SlideMenu/icons/Vector_1_nxdxfi.svg",
    subMenus: [
      { id: "alimentación", name: "Alimentación", comp: <Alimentación /> },
      { id: "salud_animal", name: "Salud Animal", comp: <SaludAnimal /> },
      { id: "producto_final", name: "Producto Final", comp: <ProductoFinal /> },
    ],
  },
  {
    id: "dispositivos",
    title: "Dispositivos",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821449/Agro/SlideMenu/icons/Vector_2_a42ao0.svg",
    subMenus: [{ id: "devices", name: "Información", comp: <Dispositivos /> }],
  },
  {
    id: "predicciones",
    title: "Predicciones",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821468/Agro/SlideMenu/icons/Vector_3_db98vc.svg",
    subMenus: [{ id: "pred_info", name: "Información" }],
  },
  {
    id: "alertas",
    title: "Alertas",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821492/Agro/SlideMenu/icons/Vector_4_kqqb6g.svg",
    subMenus: [{ id: "alerts", name: "Información", comp: <Alertas /> }],
  },
  {
    id: "mis_reportes",
    title: "Mis Reportes",
    icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709821514/Agro/SlideMenu/icons/Vector_5_gvdnpw.svg",
    subMenus: [
      { id: "crecimiento_diario", name: "Crecimiento Diario" },
      { id: "salud_animal", name: "Salud Animal" },
      { id: "346", name: "Consumo de Alimentos" },
      { id: "234234", name: "Peso y Tamaño" },
      { id: "432", name: "Costos de Producción" },
      { id: "23", name: "Informe de Reproducción" },
      {
        id: "241",
        name: "Eficiencia de Conversión Alimenticia",
      },
    ],
  },
];

// export const selectorMenuList = [
//     {
//         id: "climatización",
//         comp: <Climatización />,
//     },
//     {
//         id: "abastecimiento",
//         comp: <Abastecimiento />
//     },
//     {
//         id: "devices",
//         comp: <Dispositivos />
//     },
//     {
//         id: "alerts",
//         comp: <Alertas />
//     }
// ]
