import React, {useRef, useEffect, useState} from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import { DatePicker, Select } from 'antd'
import style from './index.less'
import moment from "moment";
import Sankey from '../sankey'
import LineArea from '../line-area'


export default function Radar() {
    const provinceName = ['北京市', '四川省']

    const [currentProvince, setCurrentProvince] = useState('北京市');//当前省份
    const selectProvinceOptions = provinceName.map(d => ({
        label: d,
        value: d,
    }))
    function handleChangeProvince(d) {
        setCurrentProvince(d)
    }

    const [currentType, setCurrentType] = useState('迁入');//当前类型
    const selectTypeOptions = [{lable: '迁入', value: '迁入'},{lable: '迁出', value: '迁出'}]
    function handleChangeType(d) {
        setCurrentType(d)
    }


    const [currentDate, setCurrentDate] = useState('20200228');//当前日期
    function onDateChange(date, dateString) {
        setCurrentDate(dateString)
    }








    return (
        <div className={style['migrate']}>
            <div className="switch-btn">
                <span className="title">迁移图</span>
                <Select
                    className='select'
                    value={currentProvince}
                    options={selectProvinceOptions}
                    dropdownStyle={{height: '200px'}}
                    onChange={handleChangeProvince}
                />
                <Select
                    className='select'
                    value={currentType}
                    options={selectTypeOptions}
                    onChange={handleChangeType}
                />
                <DatePicker defaultValue={moment(currentDate, 'YYYYMMDD')} format={'YYYYMMDD'} onChange={onDateChange} />
            </div>
            <Sankey />
            <LineArea />
        </div>

    )
}
