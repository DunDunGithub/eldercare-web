import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { useForm } from 'react-cool-form';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import classNames from 'classnames/bind';
import styles from './DataViewAIP.module.scss';
import AddAIPForm from '../AddAIPForm';

const cx = classNames.bind(styles);

let count = 0;

function DataViewAIP() {
    count++;

    const { form, use } = useForm({
        defaultValues: { firstName: '', lastName: '', framework: '' },
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
    });
    const errors = use('errors');

    const handleEditButton= (row) => {

    }

    const handleRemoveButton= (row) => {

    }

    const column = [
        {
            name: 'Fullname',
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: 'CCCD',
            selector: (row) => row.name,
            // sorttable: true
        },
        {
            name: 'Phone number',
            selector: (row) => row.email,
            // sorttable: true
        },
        {
            name: 'Date of birth',
            selector: (row) => row.address.city,
        },
        {
            name: 'Address',
            selector: (row) => row.phonenumber,
        },
        {
            name: 'Health condition',
            selector: (row) => row.phonenumber,
        },
        {
            name: 'Edit',
            cell: (row) => <button onClick={() => handleEditButton(row)}>Edit</button>,
        },
        {
            name: 'Remove',
            cell: (row) => <button onClick={() => handleRemoveButton(row)}>Remove</button>,
        },
    ];

    useEffect(() => {
        const fetData = async () => {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    setRecords(res.data);
                    setFilterRecords(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetData();
    }, []);

    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

    const handleFilter = (event) => {
        const newData = filterRecords.filter((row) =>
            row.name.toLowerCase().includes(event.target.value.toLowerCase()),
        );
        setRecords(newData);
    };

    const [popupAdd, setpopupAdd] = useState(false);

    return (
        <div className={cx('data-view')}>
            <h2>Dữ liệu tổng quát AIP</h2>
            <div className={cx('header-data-view')}>
                <div style={{ margin: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{ padding: '4px' }}
                        onChange={handleFilter}
                    />
                </div>
                <button
                    className={cx('btn-add')}
                    onClick={() => setpopupAdd(true)}
                >
                    ADD AIP
                </button>
            </div>
            <DataTable columns={column} data={records} pagination></DataTable>
            <AddAIPForm trigger={popupAdd} setTrigger={setpopupAdd}>
                <form ref={form} noValidate>
                    <h3>ADD AIP</h3>
                    {/* <div className={cx('count')}>Render {count} times</div> */}
                    {/* First name */}
                    <div>
                        <label for="firstName">First name</label>
                        <input
                            name="firstName"
                            placeholder="First name"
                            required
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    {/* Last name */}
                    <div>
                        <label for="lastName">Last name</label>
                        <input
                            name="lastName"
                            placeholder="Last name"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Date of birth */}
                    <div>
                        <label for="date">Date of birth</label>
                        <input
                            name="date"
                            placeholder="Date of birth"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* CCCD */}
                    <div>
                        <label for="cccd">CCCD</label>
                        <input name="cccd" placeholder="CCCD" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Phone number */}
                    <div>
                        <label for="phone">Phone number</label>
                        <input
                            name="phone"
                            placeholder="Phone number"
                            required
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Address */}
                    <div>
                        <label for="address">Address</label>
                        <input name="address" placeholder="Address" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    {/* Health condition */}
                    <div>
                        <label for="health">Health condition</label>
                        <input name="health" placeholder="CCCD" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* <select name="framework">
                        <option value="">I'm interesting in...</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                        <option value="svelte">Svelte</option>
                    </select> */}
                    <input type="submit" />
                </form>
            </AddAIPForm>
        </div>
    );
}

export default DataViewAIP;
