import Test from '../../Test';
import { v4 as uuidv4 } from 'uuid';

const routes = [
    {
        path: "/",
        component: Test,
        exact: true,
        key: uuidv4()
    }
]

export default routes;