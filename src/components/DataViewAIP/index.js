import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import classNames from 'classnames/bind';
import styles from './DataViewAIP.module.scss'

const cx = classNames.bind(styles);

function DataViewAIP() {
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
            <h2>Dữ liệu tổng quát AIP</h2>
            <div style={{ margin: '10px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{ padding: '4px' }}
                    onChange={handleFilter}
                />
            </div>
            <DataTable columns={column} data={records} pagination></DataTable>
        </div>
    );
}

export default DataViewAIP;
