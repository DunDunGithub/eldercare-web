import classNames from 'classnames/bind';
import styles from './AddGuardian.module.scss';
import axios from 'axios';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddGuardianForm(props) {
    const [guardianData, setGuardianData] = useState({
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
            .post('https://eldercare.up.railway.app/guardian', guardianData)
            .then((res) => {
                // Call the callback function to trigger table update in DataViewAIP
                props.onGuardianAdded();
                props.onAdd();
                // Reset the form fields
                setGuardianData({
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
        setGuardianData({ ...guardianData, [e.target.name]: String(e.target.value) });
    };

    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                    style={{padding:'4px', width:'80px'}}
                >
                    Close
                </button>

                <h3>ADD Guardian</h3>
                <form noValidate onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            name="firstName"
                            placeholder="First name"
                            value={guardianData.firstName}
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
                            value={guardianData.lastName}
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
                            value={guardianData.dateOfBirth}
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
                            value={guardianData.CCCD}
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
                            value={guardianData.phoneNumber}
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
                            value={guardianData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" style={{width:'80px'}}>Submit</button>
                </form>
            </div>
        </div>
    ) : (
        ''
    );
}

export default AddGuardianForm;
