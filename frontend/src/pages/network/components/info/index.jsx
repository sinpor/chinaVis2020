import React from "react"
import store from "../../store"
import { observer } from "mobx-react"
import Section from "@/components/section"
import { List, Space, Avatar, Collapse } from "antd"
import {
	MessageOutlined,
	LikeOutlined,
	UserOutlined,
	ShareAltOutlined,
} from "@ant-design/icons"

// const TRANSLATE = {
// 	"﻿weiboname": "用户名",
// 	weibotext: "微博",
// 	topic: "话题",
// 	date: "日期",
// 	time: "时间",
// 	forward: "转发量",
// 	comment: "评论量",
// 	thumbs: "点赞量",
// }

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
)

export default observer(function Index() {
	let { weiboContent } = store
	// weiboContent = weiboContent.length
	// 	? weiboContent
	// 	: Object.keys(TRANSLATE).map((d) => ({
	// 			type: d,
	// 			value: "",
	// 	  }))
	return (
		<Section title="微博详情">
			<div className="content">
				<List
					itemLayout="vertical"
					size="large"
					// locale={{ emptyText: "请选择话题" }}
					dataSource={weiboContent}
					renderItem={(item) => (
						<List.Item
							key={`${item["﻿weiboname"]}-${item.topic}-${item.date}-${item.time}`}
							actions={[
								<IconText
									icon={ShareAltOutlined}
									text={item.forward}
									key="list-vertical-star-o"
								/>,
								<IconText
									icon={LikeOutlined}
									text={item.thumbs}
									key="list-vertical-like-o"
								/>,
								<IconText
									icon={MessageOutlined}
									text={item.comment}
									key="list-vertical-message"
								/>,
							]}
						>
							<List.Item.Meta
								avatar={<Avatar icon={<UserOutlined />} />}
								title={item["﻿weiboname"]}
								description={item.topic}
							/>
							<Collapse
								bordered={false}
								expandIconPosition="right"
							>
								<Collapse.Panel
									header={`${item.weibotext.slice(
										0,
										15
									)} ...`}
								>
									{item.weibotext}
								</Collapse.Panel>
							</Collapse>
						</List.Item>
					)}
				/>
			</div>
		</Section>
	)
})
