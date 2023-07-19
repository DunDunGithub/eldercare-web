import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import classNames from 'classnames/bind';
import styles from './DataViewCalender.module.scss'

const cx = classNames.bind(styles);

function DataViewCalender() {
    const column = [
        {
            name: 'Time',
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row) => row.name,
            // sorttable: true
        },
        {
            name: 'AIP',
            selector: (row) => row.email,
            // sorttable: true
        },
        {
            name: 'Job description',
            selector: (row) => row.address.city,
        },
        {
            name: 'Pictures prove',
            selector: (row) => row.phonenumber,
        },
        {
            name: 'Rate',
            selector: (row) => row.phonenumber,
        },
        {
            name: 'Change',
        }
    ];

    useEffect(() => {
        const fetData = async () => {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    setRecords(res.data)
                    setFilterRecords(res.data)
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

    return (
        <div className={cx('data-view')}>
            <h2>Dữ liệu tổng quát Calender</h2>
            <div className={cx('header-data-view')}>
                <div style={{ margin: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{ padding: '4px' }}
                        onChange={() => {}}
                    />
                </div>
                <button
                    className={cx('btn-add')}
                    onClick={() => {}}
                >
                    ADD Task
                </button>
            </div>
            <DataTable columns={column} data={records} pagination></DataTable>
        </div>
    );
}

export default DataViewCalender;
