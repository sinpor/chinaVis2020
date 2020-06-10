import React from 'react'
import NetworkChart from './components/3d'
import style from './index.less'

export default function Index() {
    return (
        <div className={style['network']}>
            <div className="network-info"></div>
            <div className="network-chart">
                <NetworkChart />
            </div>
        </div>
    )
}
