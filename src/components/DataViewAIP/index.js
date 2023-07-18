import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { useForm } from 'react-cool-form';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import classNames from 'classnames/bind';
import styles from './DataViewAIP.module.scss';
import AddAIPForm from '../AddAIPForm';
import RemovePopup from '../RemovePopup';
import EditPopup from '../EditPopup';

const cx = classNames.bind(styles);

let count = 0;

function DataViewAIP() {
    const handleEditButton = (row) => {
        seteditPopup(true);
    };

    const handleRemoveButton = (row) => {
        setremovePopup(true);
    };

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
            cell: (row) => (
                <button onClick={() => handleEditButton(row)} style={{width:'60px', height:'30px'}}>Edit</button>
            ),
        },
        {
            name: 'Remove',
            cell: (row) => (
                <button
                    onClick={() => {
                        if (
                            window.confirm(
                                'Are you sure you wish to delete this item?',
                            )
                        )
                            this.onCancel(() => {});
                    }}
                    style={{width:'80px', height:'30px'}}
                >
                    Remove
                </button>
            ),
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
    const [removePopup, setremovePopup] = useState(false);
    const [editPopup, seteditPopup] = useState(false);

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

            <RemovePopup
                trigger={removePopup}
                setTrigger={setremovePopup}
            ></RemovePopup>

            <EditPopup
                trigger={editPopup}
                setTrigger={seteditPopup}
            ></EditPopup>

            {/* Add AIP */}
            <AddAIPForm
                trigger={popupAdd}
                setTrigger={setpopupAdd}
            ></AddAIPForm>
        </div>
    );
}

export default DataViewAIP;
