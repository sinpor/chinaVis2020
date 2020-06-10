import React, { useRef, useEffect } from 'react'
import echarts from "echarts";
import axios from '@/services';
import 'echarts-gl'

const option_echartsnetwork = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "visualMap": {
        "show": true,
        "type": "continuous",
        max: 0.056652964153609264, //读取js文件
        min: 0.001692414020424048, //读取js文件
        "inRange": {
            "color": [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026"
            ],
            "colorAlpha": 0.99
        },
        "seriesIndex": 0,
        "calculable": true,
        "splitNumber": 10,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140
    },

    //整个series读取js文件
    // series: [],
    "legend": [{
        "data": [
            ""
        ],
        "selected": {},
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    
    "xAxis3D": {
        "nameGap": 20,
        "type": "value",
        "axisLabel": {
            "margin": 8
        }
    },
    "yAxis3D": {
        "nameGap": 20,
        "type": "value",
        "axisLabel": {
            "margin": 8
        }
    },
    "zAxis3D": {
        "nameGap": 20,
        "type": "value",
        "axisLabel": {
            "margin": 8
        }
    },
    "grid3D": {
        "boxWidth": 400,
        "boxHeight": 100,
        "boxDepth": 400,
        "viewControl": {
            "autoRotate": false,
            "autoRotateSpeed": 10,
            "rotateSensitivity": 1
        }
    },
    "title": [{
        "text": '\u793e\u4ea4\u7f51\u7edc\u4e2d\u5fc3\u7ed3\u6784\u53ef\u89c6\u5316-lesmis11 k=2'  //修改成当天日期
    }]
};

export default function Index() {
    const chart = useRef(null)
    const container = useRef(null)

    useEffect(() => {
        function getSeries() {
            axios('3dSeries.json').then(res => {
                chart.current.setOption({
                    ...option_echartsnetwork,
                    series: res
                })
            })
        }
        chart.current = echarts.init(container.current, 'light')
        // chart.current.setOption(option_echartsnetwork)
        getSeries()
    }, [])

    return (
        <div
            className="chart-container"
            ref={container}
        />
    )
}
