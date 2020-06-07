import React, {useRef, useEffect, useState} from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import { DatePicker, Select } from 'antd'
import style from './index.less'
import moment from "moment";


export default function Radar() {
    const [currentDate, setCurrentDate] = useState('2020-02-28');//当前日期
    function onDateChange(date, dateString) {
        setCurrentDate(dateString)
    }
    const [option, setOption] = useState({
        title: {
            text: '迁入规模与确诊对比图',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['直接访问', '搜索引擎'],
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle:{
                    color: '#fff'
                }
            },
            axisTick: {
                inside:true
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show:false
            },
            axisLine: {
                lineStyle:{
                    color: '#fff'
                }
            },
            axisTick: {
                show:false
            },
            splitLine:{show: false}
        },
        series: [
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    });//图标数据


    const container = useRef(null)
    const chart = useRef(null)
    useEffect(() => {
        chart.current = echarts.init(container.current);
        chart.current.setOption(option)
        return () => {
        }
    }, [])

    return (
        <div className={style['line']}>
            <div className="dateSelect">
                <DatePicker defaultValue={moment(currentDate, 'YYYY-MM-DD')} format={'YYYY-MM-DD'} onChange={onDateChange} />
            </div>
            <div className="chart-container" style={{height: '30vh'}}
                 ref={container}
            />
        </div>

    )
}
