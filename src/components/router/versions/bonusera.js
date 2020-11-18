import { lazy } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = lazy(() => import('../../Home'));
const Form = lazy(() => import('../../Form'));
const Landing = lazy(() => import('../../Landing'));
const Table = lazy(() => import('../../Table'));


const routes = [
    {   
        path: "/",
        component: Home,
        exact: true,
        routeKey: uuidv4(),
        navKey: uuidv4(),

    },
    {
        path: "/form",
        component: Form,
        exact: true,
        routeKey: uuidv4(),
        navKey: uuidv4(),
    },
    {
        path: "/landing",
        component: Landing,
        exact: true,
        routeKey: uuidv4(),
        navKey: uuidv4(),
    },
    {
        path: "/table",
        component: Table,
        exact: true,
        routeKey: uuidv4(),
        navKey: uuidv4(),
    },
]

export default routes;