import classNames from "classnames/bind";
import styles from "./DetailTask.module.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles)

function DetailTask(props) {

    const selectedData = props.selectedData;

    const [aip, setAip] = useState();
    const [guardian, setGuardian] = useState();

    const fetchDataAIP = async () => {
        axios
            .get(`https://eldercare.up.railway.app/aip/${selectedData.aip}`)
            .then((res) => {
                setAip(res.data);
            })
            .catch((err) => console.log(err));
    };

    const fetchDataGuardian = async () => {
        axios
            .get(`https://eldercare.up.railway.app/guardian/${selectedData.guardian}`)
            .then((res) => {
                setGuardian(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchDataAIP();
        fetchDataGuardian();
    }, []);


    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </button>

                <h3>Detail</h3>

                <div className={cx('wrap-detail')}>
                    <div className={cx('detail-title')}>
                        <ul>
                            <li>Title:</li>
                            <li>Detail:</li>
                            <li>Status:</li>
                            <li>Guardian:</li>
                            <li>AIP</li>
                            <li>Start time:</li>
                            <li>End time</li>
                        </ul>
                        <ul>
                            <li>{selectedData.title}</li>
                            <li>{selectedData.detail}</li>
                            <li>{selectedData.isDone ? "Done" : "Processing"}</li>
                            <li>{guardian.firstName} {guardian.lastName}</li>
                            <li>{aip.firstName} {aip.lastName}</li>
                            <li>{selectedData.startTime}</li>
                            <li>{selectedData.endTime}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    ) : (
        ''
    );
}

export default DetailTask;