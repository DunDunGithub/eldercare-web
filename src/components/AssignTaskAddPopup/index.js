import classNames from 'classnames/bind';
import styles from './AssignTaskAddPopup.module.scss';

import { useState } from 'react';
import axios from 'axios';
import DateTimePicker from '../DateTimePicker';

const cx = classNames.bind(styles);

function AssignTaskAddPopup(props) {
    const [taskData, setTaskData] = useState({
        title: '',
        detail: '',
        isDone: false,
        isCycle: false,
        guardian: '',
        aip: '',
        schedule: '',
        note: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(taskData);

        axios
            .post('https://eldercare.cyclic.cloud/tasks', taskData)
            .then((res) => {
                // Call the callback function to trigger table update in DataViewAIP
                props.onAssignTaskAdded();
                props.onAdd();
                // Reset the form fields
                setTaskData({
                    title: '',
                    detail: '',
                    isDone: false,
                    startTime: new Date(),
                    endTime: new Date(),
                    guardian: '',
                    aip: '',
                });
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (fieldName, date) => {
        setTaskData((prevData) => ({
            ...prevData,
            [fieldName]: date,
        }));
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

                <h3>ADD Task for Guardian</h3>
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
                    {/* <div>
                        <label htmlFor="isDone">Status</label>
                        <input
                            type="checkbox"
                            name="isDone"
                            placeholder="Status"
                            value={taskData.isDone}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

                    <div>
                        <label htmlFor="startTime">Start time</label>
                        <DateTimePicker
                            selectedDate={taskData.startTime}
                            onSelectDate={(date) =>
                                handleDateChange('startTime', date)
                            }
                            required
                        />
                    </div>
                    {/* Phone number */}
                    <div>
                        <label htmlFor="endTime">End time</label>
                        <DateTimePicker
                            selectedDate={taskData.endTime}
                            onSelectDate={(date) =>
                                handleDateChange('endTime', date)
                            }
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
