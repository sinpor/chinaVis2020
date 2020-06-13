import React, { useEffect } from "react"
import NetworkChart from "./components/3d"
import store from "./store"
import Content from "./components/info"
import style from "./index.less"
import WordCloud from "./components/wordCloud"
import { DatePicker } from "antd"
import { observer } from "mobx-react"
import moment from "moment"

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
						<span>选择日期：</span>
						<DatePicker
							width="200px"
							onChange={updateDate}
							value={currentDate}
							disabledDate={(currentDate) =>
								currentDate < moment("2020/1/9") ||
								currentDate > moment("2020/3/31")
							}
							showToday={false}
							allowClear={false}
						/>
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
