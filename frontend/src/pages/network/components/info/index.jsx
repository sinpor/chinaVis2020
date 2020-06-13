import React from "react"
import store from "../../store"
import { observer } from "mobx-react"
import { DatePicker } from "antd"

const TRANSLATE = {
	"﻿weiboname": "用户名",
	weibotext: "微博",
	topic: "话题",
	date: "日期",
	time: "时间",
	forward: "转发量",
	comment: "评论量",
	thumbs: "点赞量",
}

export default observer(function Index() {
	let { weiboContent } = store
	weiboContent = weiboContent.length
		? weiboContent
		: Object.keys(TRANSLATE).map((d) => ({
				type: d,
				value: "",
		  }))
	return (
		<div className="content">
			<div className="content-form">
				<DatePicker />
			</div>
			{weiboContent.map((d) => (
				<div key={d.type} className="content-item">
					<span className="content-item-type">
						{TRANSLATE[d.type]} :
					</span>
					<span className="content-item-value">{d.value}</span>
				</div>
			))}
		</div>
	)
})
