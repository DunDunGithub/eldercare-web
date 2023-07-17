import HomePage from '~/pages/Home';
import Calender from '~/pages/Calender';
import AIP from '~/pages/AIP';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

//Đăng nhập xong mới xem được
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/dashboard/calender',
        component: Calender,
    },
    {
        path: '/dashboard/aip',
        component: AIP,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path:'/dashboard',
        component: Dashboard
    }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
