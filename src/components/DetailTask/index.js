import classNames from 'classnames/bind';
import styles from './DetailTask.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const cx = classNames.bind(styles);

function DetailTask(props) {

    moment.locale('en');

    const selectedData = props.selectedData;
    console.log(
        '🚀 ~ file: index.js:10 ~ DetailTask ~ props.selectedData:',
        props.selectedData,
    );

    const [aip, setAip] = useState({});
    const [guardian, setGuardian] = useState({});
    console.log('🚀 ~ file: index.js:13 ~ DetailTask ~ guardian:', guardian);

    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const fetchDataAIP = async () => {
        try {
            const response = await axios.get(
                `https://eldercare.up.railway.app/aip/${selectedData.aip}`,
            );
            setAip(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataGuardian = async () => {
        try {
            const response = await axios.get(
                `https://eldercare.up.railway.app/guardian/${selectedData.guardian}`,
            );
            setGuardian(response.data);
            console.log(
                '🚀 ~ file: index.js:31 ~ fetchDataGuardian ~ response.data:',
                response.data,
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true); // Set loading state to true before fetching
            await Promise.all([fetchDataAIP(), fetchDataGuardian()]); // Wait for both API calls to complete
            setIsLoading(false); // Set loading state to false once all data is fetched
        };
        fetchAllData();
    }, [selectedData]); //

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

                {isLoading ? ( // Display loading indicator while data is being fetched
                    <div>Loading...</div>
                ) : (
                    <div className={cx('wrap-detail')}>
                        <div className={cx('detail-title')}>
                            <ul className={cx('ul-1')}>
                                <li>Title:</li>
                                <li>Detail:</li>
                                <li>Status:</li>
                                <li>Guardian:</li>
                                <li>AIP</li>
                                <li>AIP Address</li>
                                <li>Start time:</li>
                                <li>End time</li>
                            </ul>
                            <ul className={cx('ul-2')}>
                                <li>{selectedData.title}</li>
                                <li>{selectedData.detail}</li>
                                <li>
                                    {selectedData.isDone
                                        ? 'Done'
                                        : 'Processing'}
                                </li>
                                <li>
                                    {guardian.firstName} {guardian.lastName}
                                </li>
                                <li>
                                    {aip.firstName} {aip.lastName}
                                </li>
                                <li>
                                    {aip.address}
                                </li>
                                <li>{selectedData.startTime}</li>
                                <li>{selectedData.endTime}</li>
                            </ul>
                        </div>
                        <img 
                            className={cx('image')}
                            src={selectedData.image.link}
                            ></img>
                        <div className={cx('address')}>
                            Address: {selectedData.image.address}
                        </div>
                        <div className={cx('address')}>
                            Time: {selectedData.image.time}
                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : (
        ''
    );
}

export default DetailTask;
