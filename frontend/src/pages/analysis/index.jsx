import React from 'react'
import { Row, Col } from 'antd'
import Map from './components/map'
import Migrate from './components/migrate'
import Line from './components/line'
import style from './index.less'

export default function Opinion() {
    return (
        <Row gutter={16}
            className={style.analysis}
        >
            <Col span={12}>
                <Map />
                <Line />
            </Col>
            <Col span={12}>
                <Migrate />
            </Col>
        

        </Row>
    )
}
