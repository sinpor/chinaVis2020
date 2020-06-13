import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import moment from "moment"
import _ from "lodash"
import axios from "@/services"
import Section from "@/components/section"

export default function BarChart() {
	const container = useRef(null)
	const svgcRef = useRef(null)
	const svg = useRef(null)
	const layout = useRef({})
	const originData = useRef({})
	const currentData = useRef([])

	useEffect(() => {
		const colorBar = d3.scaleOrdinal(d3.schemeAccent)
		function updateBarData(date) {
			console.log(date)

			currentData.current = _.chain(originData.current[date] || [])
				.map((d) => ({
					date: moment(d.datetime, "YYYY-MM-DD HH:mm")
						.startOf("hour")
						.valueOf(),
					emotion: d.emotion,
				}))
				.reduce((obj, d) => {
					const key = d.date
					if (!obj[key]) {
						obj[key] = []
					}
					obj[key].push(d)
					return obj
				}, {})
				.forEach((d, k, obj) => {
					obj[k] = { ..._.countBy(d, "emotion"), date: k }
				})
                .values()
                .orderBy('date')
				.value()
			console.log(currentData.current)
		}
		function initData() {
			const promiseArr = []
			const days =
				(moment("2020-4-1").valueOf() - moment("2020-2-1").valueOf()) /
				(3600 * 1000 * 24)
			for (let i = 0; i < days; i++) {
				const date = moment("2020-2-1").add(i, "day").format("YYYY-M-D")
				promiseArr.push(
					axios(`emotion/${date}.json`).then((res) => {
						originData.current[date] = res
					})
				)
			}
			Promise.all(promiseArr).then(() => {
				axios("EmotionNum.json").then((res) => {
					currentData.current = res.map((d) => ({
						date: d.date,
						positive: +d.positiveNum,
						negative: +d.negativeNum,
						neural: +d.neuralNum,
					}))
					const pieData = _.chain(res)
						.map("date")
						.orderBy((d) => moment(d).valueOf())
						.value()
					initChart(pieData)
				})
			})
		}

		function initChart(pieData) {
			const { clientWidth, clientHeight } = container.current
			const width = d3.min([clientWidth, clientHeight])
			const radius = width / 2
			const barRadius = [radius - radius * 0.7, radius]
			const dateRadius = [radius / 8, barRadius[0]]
			layout.current = {
				width,
				barRadius,
				dateRadius,
			}
			svg.current = d3
				.select(svgcRef.current)
				.attr("width", width)
				.attr("height", width)
				.attr("viewBox", `0 0 ${width} ${width}`)
				.append("g")
				.attr("transform", `translate(${width / 2}, ${width / 2})`)

			updateBar()
			drawPie(pieData)
		}

		function updateBar() {
			svg.current.selectAll("g.arcBar").remove()
			drawBar("positive")
			drawBar("negative")
		}

		function drawPie(data) {
			const pie = d3
				.pie()
				.padAngle(() => 0.01)
				.value(() => 1)

			const arcsData = pie(data)

			const { dateRadius } = layout.current
			const arc = d3
				.arc()
				.outerRadius(() => dateRadius[1])
				.innerRadius(() => dateRadius[0])
				.cornerRadius(() => 5)

			const arcG = svg.current
				.append("g")
				.selectAll("g.arcG")
				.data(arcsData)
				.enter()
				.append("g")
				.classed("arcDate", true)
				.on("click", (d) => {
					const { data } = d
					const date = moment(data).format("YYYY-M-D")
					updateBarData(date)
					updateBar()
				})

			arcG.append("path").attr("d", arc).attr("fill", "#202f5e")
		}

		function drawBar(sortKey) {
			const { barRadius } = layout.current
            const { current: data } = currentData
            
			const extent = d3.extent(data, (d) => +d[sortKey])
			const scale = d3.scaleLinear().domain(extent).range(barRadius)

			const pie = d3
				.pie()
				.padAngle(() => 0.01)
				.value(() => 1)

			const arcsData = pie(data)

			const arc = d3
				.arc()
				.outerRadius((d) => scale(+d.data[sortKey]))
				.innerRadius(() => barRadius[0])
				.cornerRadius(() => 2)

			const arcG = svg.current
				.append("g")
				.classed('arcBar', true)
				.selectAll("g.arcG")
				.data(arcsData)
				.enter()
				.append("g")
				.classed("arcG", true)

			arcG.append("path")
				.attr("d", arc)
				.attr("fill", () => colorBar(sortKey))
				.attr("opacity", 0.5)
				.transition()
				.duration(400)
				.ease(d3.easeCubicOut)
				.attrTween("d", (d) => {
					const i = d3.interpolateObject(
						{
							...d,
                            endAngle: d.startAngle,
                            data: {
                                ...d.data,
                                [sortKey]: 0,
                            }
						},
						d
                    )
					return (t) => arc(i(t))
				})
		}

		initData()
	}, [])

	return (
		<Section title="情感分析">
			<div
				className="chart-container"
				ref={container}
				style={{ textAlign: "center" }}
			>
				<svg ref={svgcRef} />
			</div>
		</Section>
	)
}
