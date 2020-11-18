import Test from "../../Test";
import Cards from "../../Cards";
import Slider from "../../Carousel";
import { v4 as uuidv4 } from "uuid";

const routes = [
  {
    path: "/",
    component: Test,
    exact: true,
    key: uuidv4(),
  },
  {
    path: "/cards",
    component: Cards,
    exact: true,
    key: uuidv4(),
  },
  {
    path: "/carousel",
    component: Slider,
    exact: true,
    key: uuidv4(),
  },
];

export default routes;
