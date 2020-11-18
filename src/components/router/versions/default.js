import { lazy } from 'react';
import { v4 as uuidv4 } from "uuid";

const Test = lazy(() => import('../../Test'));
const Cards = lazy(() => import('../../Cards'));
const Carousel = lazy(() => import('../../Carousel'));

const routes = [
  {
    path: "/",
    component: Test,
    exact: true,
    routeKey: uuidv4(),
    navKey: uuidv4(),
  },
  {
    path: "/cards",
    component: Cards,
    exact: true,
    routeKey: uuidv4(),
    navKey: uuidv4(),
  },
  {
    path: "/carousel",
    component: Carousel,
    exact: true,
    routeKey: uuidv4(),
    navKey: uuidv4(),
  },
];

export default routes;
