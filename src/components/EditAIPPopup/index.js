import classNames from 'classnames/bind';
import styles from './EditAIPPopup.module.scss';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function EditPopup(props) {
    const selectedData = props.selectedData;
    const handleSelectedDataChange = props.handleSelectedDataChange;

    const updateData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `https://eldercare.up.railway.app/aip/${selectedData._id}`,
                selectedData,
            );
            console.log(response.data); // Handle the response from the API
            props.onAIPUpdated();
            props.setTrigger(false);
        } catch (error) {
            console.error(error); // Handle the error
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleSelectedDataChange((prevData) => ({
            ...prevData,
            [name]: value,
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

                <form noValidate onSubmit={updateData}>
                    <h3>EDIT AIP</h3>

                    {/* First name */}
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            name="firstName"
                            placeholder="First name"
                            value={selectedData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Last name */}
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input
                            name="lastName"
                            placeholder="Last name"
                            value={selectedData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Date of birth */}
                    <div>
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input
                            name="dateOfBirth"
                            placeholder="Date of birth"
                            value={selectedData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* CCCD */}
                    <div>
                        <label htmlFor="CCCD">CCCD</label>
                        <input
                            name="CCCD"
                            placeholder="CCCD"
                            value={selectedData.CCCD}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Phone number */}
                    <div>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={selectedData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Address */}
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            name="address"
                            placeholder="Address"
                            value={selectedData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Health condition */}
                    <div>
                        <label htmlFor="health">Health condition</label>
                        <input name="health" placeholder="CCCD" required />
                    </div>

                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    ) : (
        ''
    );
}

export default EditPopup;
