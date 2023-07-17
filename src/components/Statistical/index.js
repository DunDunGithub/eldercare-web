import React from 'react';
import classNames from 'classnames/bind';
import styles from './Statistical.module.scss'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const cx = classNames.bind(styles);

const data = [
    {name: "2017", Finished: 1, Incomplete:12, AIP: 5},
    {name: "2018", Finished: 5, Incomplete:5, AIP: 14},
    {name: "2019", Finished: 8, Incomplete:4, AIP: 10},
    {name: "2020", Finished: 3, Incomplete:15, AIP: 8},
    {name: "2021", Finished: 15, Incomplete:6, AIP: 3},
    {name: "2022", Finished: 10, Incomplete:18, AIP: 1},
]



function Statistical() {
    return ( 
        <div className={cx('data-view')}>
            <h2>Thống kê</h2>
            <div className={cx('wrap')}>
                <div className={cx('item-group')}>
                    <div>Công việc đã hoàn thành</div>
                    <p className={cx('item-count')}>24</p>
                </div>
                <div className={cx('item-group')}>
                    <div>Công việc chưa hoàn thành</div>
                    <p className={cx('item-count')}>5</p>
                </div>
                <div className={cx('item-group')}>
                    <div>Số lượng AIP</div>
                    <p className={cx('item-count')}>2</p>
                </div>
            </div>
            <div className={cx('wrap-chart')}>
                <ResponsiveContainer width="95%" height={500}>
                    <LineChart data={data}>
                        <Line type={'monotone'}
                              dataKey="Finished"
                              stroke='#2196F3'
                              strokeWidth={3}/>
                        <Line type={'monotone'}
                              dataKey="Incomplete"
                              stroke='#F44236'
                              strokeWidth={3}/>
                        <Line type={'monotone'}
                              dataKey="AIP"
                              stroke='#FFCA29'
                              strokeWidth={3}/>
                        <CartesianGrid stroke='#ccc'/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
     );
}

export default Statistical;