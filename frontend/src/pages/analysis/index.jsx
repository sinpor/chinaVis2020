import React from 'react'
import { Row, Col } from 'antd'
import Map from './components/map'

export default function Opinion() {
    return (
        <Row gutter={16}>
            <Col span={6}>

            </Col>
            <Col span={12}>
                <Map />
            </Col>
            <Col span={6}>

            </Col>

        </Row>
    )
}
