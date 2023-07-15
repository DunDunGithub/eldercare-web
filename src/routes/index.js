import HomePage from '~/pages/Home';
import Calender from '~/pages/Calender';
import AIP from '~/pages/AIP';
import Login from '~/pages/Login';

//Đăng nhập xong mới xem được
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/calender',
        component: Calender,
    },
    {
        path: '/aip',
        component: AIP,
    },
    {
        path: '/login',
        component: Login,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
