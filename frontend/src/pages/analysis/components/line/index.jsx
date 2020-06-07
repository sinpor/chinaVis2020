import React, {useRef, useEffect, useState} from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import { DatePicker, Select } from 'antd'
import style from './index.less'
import moment from "moment";
const provinceName = ["北京市", "天津市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖南省", "广东省", "广西自治区", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏自治区", "新疆自治区", "台湾省", "香港特别行政区", "澳门特别行政区"];


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
            data: ['迁入比例', '确诊比例'],
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
            data: provinceName,
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
                name: '迁入比例',
                type: 'line',
                stack: '比率',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '确诊比例',
                type: 'line',
                stack: '比率',
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
