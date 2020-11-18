import Home from '../../Home';
import { v4 as uuidv4 } from 'uuid';

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        key: uuidv4()
    }
]

export default routes;