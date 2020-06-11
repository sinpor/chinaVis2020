import React from 'react'
import store from '../../store'
import { observer } from 'mobx-react'
import { DatePicker } from 'antd'

export default observer(function Index() {
    const { weiboContent } = store
    return (
        <div className="content">
            <div className="content-form">
                <DatePicker />
            </div>
            {
                weiboContent.map(d => (
                    <div key={d.type} className="content-item">
                        <span className="content-item-type">{d.type} :</span>
                        <span className="content-item-value">{d.value}</span>
                    </div>
                ))
            }
        </div>
    )
})
