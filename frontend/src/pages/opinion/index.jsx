import React from 'react'
import { Row, Col } from 'antd'
import Table from './components/table'
import Radar from './components/radar'
import WordCloud from './components/wordCloud'

export default function Opinion() {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Table />
            </Col>
            <Col span={8} style={{height: '300px'}}>
                <Radar />
            </Col>
            <Col span={8}>
                <WordCloud />
            </Col>

        </Row>
    )
}
