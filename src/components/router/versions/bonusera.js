import Home from '../../Home';
import Form from '../../Form';
import Landing from '../../Landing';
import Table from '../../Table';
import { v4 as uuidv4 } from 'uuid';

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        key: uuidv4()
    },
    {
        path: "/form",
        component: Form,
        exact: true,
        key: uuidv4()
    },
    {
        path: "/landing",
        component: Landing,
        exact: true,
        key: uuidv4()
    },
    {
        path: "/table",
        component: Table,
        exact: true,
        key: uuidv4()
    },
]

export default routes;