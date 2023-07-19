import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import classNames from 'classnames/bind';
import styles from './DataViewGuardian.module.scss';
import AddGuardianForm from '../AddGuardianForm';
import EditGuardianPopup from '../EditGuardianPopup';
import RemovePopup from '../RemovePopup';

const cx = classNames.bind(styles);

function DataViewGuardian() {
    const [popupAdd, setpopupAdd] = useState(false);

    const [editPopup, seteditPopup] = useState(false);

    const [selectedData, setSelectedData] = useState({});

    const handleEditButton = (row) => {
        setSelectedData(row);
    };

    const handleRemoveButton = async (row) => {
        try {
            if (window.confirm('Are you sure you wish to delete this item?')) {
                await axios.delete(
                    `https://eldercare.up.railway.app/guardian/${row._id}`,
                );
                fetchData(); // Refresh the table data after successful deletion
            }
        } catch (error) {
            console.log(error);
        }
    };

    const column = [
        {
            name: 'First Name',
            selector: (row) => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.lastName,
            // sorttable: true
        },
        {
            name: 'CCCD',
            selector: (row) => row.CCCD,
            // sorttable: true
        },
        {
            name: 'Date of birth',
            selector: (row) => row.dateOfBirth,
        },
        {
            name: 'Phone number',
            selector: (row) => row.phoneNumber,
        },
        {
            name: 'Address',
            selector: (row) => row.address,
        },
        {
            name: 'Edit',
            cell: (row) => (
                <button
                    onClick={() => {
                        handleEditButton(row);
                        seteditPopup(true);
                    }}
                    style={{ width: '60px', height: '30px' }}
                >
                    Edit
                </button>
            ),
        },
        {
            name: 'Remove',
            cell: (row) => (
                <button
                    onClick={() => {
                        handleRemoveButton(row);
                    }}
                    style={{ width: '80px', height: '30px' }}
                >
                    Remove
                </button>
            ),
        },
    ];

    const fetchData = async () => {
        axios
            .get('https://eldercare.up.railway.app/guardian')
            .then((res) => {
                setRecords(res.data);
                setFilterRecords(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePopupAdd = () => {
        setpopupAdd(false);
    };

    const handleGuardianAdded = () => {
        fetchData();
    };

    const handleGuardianUpdated = () => {
        fetchData();
    };

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
            <h2>Dữ liệu tổng quát Guardian</h2>
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
                    Add Guardian
                </button>
            </div>
            <DataTable columns={column} data={records} pagination></DataTable>

            {/* Remove */}
            <RemovePopup></RemovePopup>

            {/* Edit */}
            <EditGuardianPopup
                trigger={editPopup}
                setTrigger={seteditPopup}
                selectedData={selectedData}
                onGuardianUpdated={handleGuardianUpdated}
                handleSelectedDataChange={handleEditButton}
            ></EditGuardianPopup>

            {/* Add AIP */}
            <AddGuardianForm
                trigger={popupAdd}
                setTrigger={setpopupAdd}
                onGuardianAdded={handleGuardianAdded}
                onAdd={handlePopupAdd}
            ></AddGuardianForm>
        </div>
    );
}

export default DataViewGuardian;
