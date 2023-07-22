import classNames from "classnames/bind";
import styles from "./NavigationDashboard.module.scss"

const cx = classNames.bind(styles);

function NavigationDashboard() {
    return ( 
        <div className={cx('nav')}>
            <ul className={cx('nav-list')}>
                Dashboard
                <li className={cx('nav-item')}>
                    <a href="/dashboard/dataviewcalender">Calender</a>
                </li>
                <li className={cx('nav-item')}>
                    <a href="/dashboard/dataviewaip">AIP</a>
                </li>
                <li className={cx('nav-item')}>
                    <a href="/dashboard/dataviewguardian">Guardian</a>
                </li>
                <li className={cx('nav-item')}>
                    <a href="/dashboard/assign">Assign</a>
                </li>
            </ul>
            <ul className={cx('nav-list')}>
                Report
                <li className={cx('nav-item')}>
                    <a href="#!">Example 1</a>
                </li>
                <li className={cx('nav-item')}>
                    <a href="#!">Example 2</a>
                </li>
            </ul>
            <ul className={cx('nav-list')}>
                Statistical
                <li className={cx('nav-item')}>
                    <a href="/dashboard/statistical">Thống kê</a>
                </li>
            </ul>
        </div>
     );
}

export default NavigationDashboard;