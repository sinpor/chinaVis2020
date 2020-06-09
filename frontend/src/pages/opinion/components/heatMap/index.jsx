import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'
import moment from 'moment'
import _ from 'lodash'
import axios from '@/services'
import { extent } from 'd3'
import { formatDate } from '@/utils'

const cellSize = [40, 40];
const pieRadius = 20;

function getPieSeries(data, chart, categorys) {
    return data.map(function (item, index) {
        const center = chart.convertToPixel('calendar', [item.date, 1]);
        return {
            id: index + 'pie',
            type: 'pie',
            center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: [..._.map(item.data, (d, k) => ({
                name: k,
                value: d,
            })),
            ...categorys.map(d => ({
                name: d,
                value: 0,
            }))]
        };
    });
}

const option = {
    backgroundColor: 'transparent',
    calendar: {
        cellSize,
        range: '2020/01',
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        splitLine: {
            show: false
        },
        yearLabel: { show: false },
        itemStyle: {
            color: 'transparent',
        },
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
    }]
}

export default function Index() {
    const chart = useRef()
    const container  = useRef(null)

    useEffect(() => {
        function initData() {
            axios('谣言.json').then(res => {
                const data = _.chain(res)
                    .reduce((obj, d) => {
                        const key = d.data
                        if (!obj[key]) {
                            obj[key] = {
                                timeStamp: moment(key).valueOf(),
                                date: key,
                                data: [],
                            }
                        }
                        obj[key].data.push(d.category)
                        return obj
                    }, {})
                    .values()
                    .orderBy('timeStamp')
                    .map(d => ({
                        timeStamp: d.timeStamp,
                        date: formatDate(d.date),
                        data: _.countBy(d.data)
                    }))
                    .value()

                const categorys = _.chain(res)
                    .map('category')
                    .uniq()
                    .value()
                
                const dateRagnge = extent(data, d => d.timeStamp)
                    .map(d => moment(d).format('YYYY-MM-DD'))

                const scatterData = data.map(d => [d.date, 1])

                chart.current.setOption({
                    calendar: {
                        range: dateRagnge,
                    },
                    legend: {
                        data: categorys,
                    },
                    series: [{
                        id: 'label',
                        data: scatterData,
                    },
                    ...getPieSeries(data, chart.current, categorys),
                    ]
                })
                console.log(getPieSeries(data, chart.current, categorys));
                
            })
        }

        chart.current = echarts.init(container.current, 'dark')
        chart.current.setOption(option)

        initData()
    }, [])
    return (
        <div ref={container}
            style={{height: '500px'}}
            className="chart-container"
        />
    )
}
