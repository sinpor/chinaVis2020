import React, { useEffect } from 'react'
import NetworkChart from './components/3d'
import store from './store'
import Content from './components/info'
import style from './index.less'
import WordCloud from './components/wordCloud'

export default function Index() {
    useEffect(() => {
        store.initData()
    }, [])
    return (
        <div className={style['network']}>
            <div className="network-info">
                <Content />
                <div className='wordCloud'>
                    <WordCloud />
                </div>
            </div>
            <div className="network-chart">
                <NetworkChart />
            </div>
        </div>
    )
}
