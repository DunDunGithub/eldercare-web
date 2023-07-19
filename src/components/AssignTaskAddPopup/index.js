import classNames from 'classnames/bind';
import styles from './AssignTaskAddPopup.module.scss';

import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function AssignTaskAddPopup(props) {
    const [taskData, setTaskData] = useState({
        title: '',
        detail: '',
        isDone: '',
        startTime: '',
        endTime: '',
        guardian: '',
        aip: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://eldercare.up.railway.app/task', taskData)
            .then((res) => {
                // Call the callback function to trigger table update in DataViewAIP
                props.onAssignTaskAdded();
                props.onAdd();
                // Reset the form fields
                setTaskData({
                    title: '',
                    detail: '',
                    isDone: '',
                    startTime: '',
                    endTime: '',
                    guardian: '',
                    aip: '',
                });
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: String(e.target.value) });
    };

    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </button>

                <h3>ADD AIP</h3>
                <form noValidate onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            name="title"
                            placeholder="Title"
                            value={taskData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Last name */}
                    <div>
                        <label htmlFor="detail">Detail</label>
                        <input
                            name="detail"
                            placeholder="Detail"
                            value={taskData.detail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Date of birth */}
                    <div>
                        <label htmlFor="isDone">Status</label>
                        <input
                            name="isDone"
                            placeholder="Status"
                            value={taskData.isDone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* CCCD */}
                    <div>
                        <label htmlFor="startTime">Start time</label>
                        <input
                            name="startTime"
                            placeholder="Start Time"
                            value={taskData.startTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Phone number */}
                    <div>
                        <label htmlFor="endTime">End time</label>
                        <input
                            name="endTime"
                            placeholder="End time"
                            value={taskData.endTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Address */}
                    <div>
                        <label htmlFor="guardian">Guardian</label>
                        <input
                            name="guardian"
                            placeholder="Guardian"
                            value={taskData.guardian}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="aip">AIP</label>
                        <input
                            name="aip"
                            placeholder="AIP"
                            value={taskData.aip}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    ) : (
        ''
    );
}

export default AssignTaskAddPopup;
