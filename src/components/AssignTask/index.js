import axios from 'axios';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AssignTask.module.scss';
import DataTable from 'react-data-table-component';
import AssignTaskAddPopup from '../AssignTaskAddPopup';
import DetailTask from '../DetailTask';
import LoadingPopup from '../LoadingPopup';

const cx = classNames.bind(styles);

function Assign() {

    const [selectedData, setSelectedData] = useState({});

    const [loading, setLoading] = useState(false);

    const handleEditButton = (row) => {
        setSelectedData(row);
    };

    const column = [
        {
            name: 'Title',
            selector: (row) => row.title,
            sortable: true,
        },
        // {
        //     name: 'Detail',
        //     selector: (row) => row.detail,
        //     // sorttable: true
        // },
        {
            name: 'Status',
            selector: (row) => (row.isDone ? 'Done' : 'Processing'),
            // sorttable: true
        },
        // {
        //     name: 'Start time',
        //     selector: (row) => row.startTime,
        // },
        // {
        //     name: 'End time',
        //     selector: (row) => row.endTime,
        // },
        {
            name: 'Guardian',
            selector: (row) => row.guardian,
        },
        {
            name: 'AIP',
            selector: (row) => row.aip,
        },
        {
            name: 'Detail',
            cell: (row) => (
                <button
                    onClick={() => {
                        handleEditButton(row);
                        setpopupDetail(true)
                    }}
                    style={{ width: '80px', height: '30px' }}
                >
                    Detail
                </button>
            ),
        },
    ];

    const fetchData = async () => {
        setLoading(true); // Show loading popup
        try {
            const response = await axios.get('https://eldercare.cyclic.cloud/task');
            setRecords(response.data);
            setFilterRecords(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Hide loading popup regardless of success or failure
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

    const handleFilter = (event) => {
        const newData = filterRecords.filter((row) =>
            row.name.toLowerCase().includes(event.target.value.toLowerCase()),
        );
        setRecords(newData);
    };

    const handleAssignTaskAdded = () => {
        fetchData();
    };

    const [popupAdd, setpopupAdd] = useState(false);
    const [popupDetail, setpopupDetail] = useState(false);

    const handlePopupAdd = () => {
        setpopupAdd(false);
    };

    return (
        <div className={cx('data-view')}>
            <h2>Assign Task</h2>
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
                    onClick={() => setpopupAdd(true)}
                >
                    Add more task
                </button>
            </div>
            <DataTable columns={column} data={records} pagination></DataTable>

            {/* Loading Popup */}
            {loading && <LoadingPopup/>}
            {/* Add AIP */}
            <AssignTaskAddPopup
                trigger={popupAdd}
                setTrigger={setpopupAdd}
                onAssignTaskAdded={handleAssignTaskAdded}
                onAdd={handlePopupAdd}
            ></AssignTaskAddPopup>

            <DetailTask
                trigger={popupDetail}
                setTrigger={setpopupDetail}
                selectedData={selectedData}
            ></DetailTask>
        </div>
    );
}

export default Assign;
