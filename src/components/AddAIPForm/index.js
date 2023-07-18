import classNames from "classnames/bind";
import styles from "./AddAIPForm.module.scss"

const cx = classNames.bind(styles)

function AddAIPForm(props) {
    return (props.trigger) ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button className={cx('btn-close')}
                    onClick={()=>props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AddAIPForm;