import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import HeaderDashboard from '~/components/HeaderDashboard';
import NavigationDashboard from '~/components/NavigationDashboard';
import DataViewCalender from '~/components/DataViewCalender';
import DataViewAIP from '~/components/DataViewAIP';
import Statistical from '~/components/Statistical';

const cx = classNames.bind(styles);

function Dashboard() {
    return ( 
        <div className={cx('dashboard')}>
            <HeaderDashboard/>
            {/* Body */}
            <div className={cx('body')}>
                <NavigationDashboard/>
                <Statistical/>
            </div>
        </div>
        
     );
}

export default Dashboard;