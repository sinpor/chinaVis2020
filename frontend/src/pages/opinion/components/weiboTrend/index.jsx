import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'
import Section from '@/components/section';
import { proxyAxios, axios } from '@/services';
import _ from 'lodash'
import moment from 'moment'


const option = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [{
        type: 'time',
        splitLine: {show: false},
    }],
    yAxis: [{
        splitLine: {show: false},
        name: '',
        min: -5000,
    }, {
        splitLine: {show: false},
        name: '',
        min: -5000,

    }],
    grid: [{
        top: 30,
        bottom: 20
    }, {
        top: 30,
        bottom: 20
    }],
    series: [{
        name: '',
        id: '1',
        type: 'bar',
        showSymbol: false,
    }, {
        name: '',
        id: '2',
        type: 'line',
        showSymbol: false,
        xAxisIndex: 0,
        yAxisIndex: 1,
        
    }]
};

export default function Index() {
    const container = useRef(null)
    const chart = useRef(null)
    
    useEffect(() => {
        function initChart() {
            chart.current = echarts.init(container.current, 'dark');
            chart.current.setOption(option)
        }

        function getData() {
            
        }
        initChart()
    }, [])

    return (
        <Section title="微博用户情感变化趋势">
            <div className="chart-container"
                ref={container}
            />
        </Section>
    )
}
