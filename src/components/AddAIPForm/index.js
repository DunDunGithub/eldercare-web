import classNames from 'classnames/bind';
import styles from './AddAIPForm.module.scss';
import axios from 'axios';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddAIPForm(props) {
    const [aipData, setAipData] = useState({
        firstName: '',
        lastName: '',
        CCCD: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://eldercare.up.railway.app/aip', aipData)
            .then((res) => {
                // Call the callback function to trigger table update in DataViewAIP
                props.onAIPAdded();
                props.onAdd();
                // Reset the form fields
                setAipData({
                    firstName: '',
                    lastName: '',
                    CCCD: '',
                    phoneNumber: '',
                    dateOfBirth: '',
                    address: '',
                });
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setAipData({ ...aipData, [e.target.name]: String(e.target.value) });
    };

    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                >
                    Close›
                </button>

                <h3>ADD AIP</h3>
                <form noValidate onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            name="firstName"
                            placeholder="First name"
                            value={aipData.firstName}
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
                            value={aipData.lastName}
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
                            value={aipData.dateOfBirth}
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
                            value={aipData.CCCD}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Phone number */}
                    <div>
                        <label htmlFor="phone">Phone number</label>
                        <input
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={aipData.phoneNumber}
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
                            value={aipData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Health condition */}
                    <div>
                        <label htmlFor="health">Health condition</label>
                        <input name="health" placeholder="CCCD" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    ) : (
        ''
    );
}

export default AddAIPForm;
