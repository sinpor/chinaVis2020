import React from 'react'
import { Row, Col } from 'antd'
import Table from './components/table'
import Radar from './components/radar'
import WordCloud from './components/wordCloud'
import NewNCount from './components/newNCount'
import style from './index.less'

export default function Opinion() {
    return (
        <Row gutter={16}
            className={style.options}
        >
            <Col span={8}>
                <Table />
            </Col>
            <Col span={8} >
                <NewNCount />
            </Col>
            <Col span={8}>
                <Radar />
            </Col>
            <Col span={8}>
                <WordCloud />
            </Col>

        </Row>
    )
}
