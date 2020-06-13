import React, { useEffect } from "react"
import NetworkChart from "./components/3d"
import store from "./store"
import Content from "./components/info"
import style from "./index.less"
import WordCloud from "./components/wordCloud"
import { DatePicker } from "antd"
import { observer } from "mobx-react"

export default observer(function Index() {
	const { updateDate, currentDate } = store
	useEffect(() => {
		store.initData()
	}, [])

	return (
		<div className={style["network"]}>
			<div className="network-info">
				<div className="network-info-header">
					<div className="content-form">
						<DatePicker width="200px" onChange={updateDate} value={currentDate} />
					</div>
				</div>
				<div className="network-info-container">
					<div className="network-info-weibo">
						<Content />
					</div>
					<div className="wordCloud">
						<WordCloud />
					</div>
				</div>
			</div>
			<div className="network-chart">
				<NetworkChart />
			</div>
		</div>
	)
})
