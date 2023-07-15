import classNames from "classnames/bind";

import styles from './Login.module.scss'

import logo from 'src/assets/images/logoElcare.png'
import Form from "~/components/Form";

const cx = classNames.bind(styles)

function Login() {
    return ( 
        <div className={cx('app-login')}>
            <div className={cx('logo')}>
                <img src={logo}></img>
            </div>
            {/* Form */}
            <div className={cx('main-form')}>
                <Form/>
            </div>
        </div>
     );
}

export default Login;