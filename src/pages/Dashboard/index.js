import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import HeaderDashboard from '~/components/HeaderDashboard';
import NavigationDashboard from '~/components/NavigationDashboard';
import Statistical from '~/components/Statistical';
import DataViewAIP from '~/components/DataViewAIP';
import DataViewCalender from '~/components/DataViewCalender';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from 'react-router-dom';
import { bodyRoutes } from '~/routes';
import DataViewGuardian from '~/components/DataViewGuardian';
const cx = classNames.bind(styles);

function Dashboard() {
    // const [activeTab, setActiveTab] = useState('');

    const params = useParams();

    console.log('Param', params);

    const category = params?.category;

    return (
        <div className={cx('dashboard')}>
            <HeaderDashboard />
            {/* Body */}
            <div className={cx('body')}>
                <NavigationDashboard />
                {category === 'statistical' && <Statistical />}
                {category === 'dataviewcalender' && <DataViewCalender />}
                {category === 'dataviewaip' && <DataViewAIP />}
                {category === 'dataviewguardian' && <DataViewGuardian />}
            </div>
        </div>
    );
}

export default Dashboard;
