import React from 'react'
import { BorderBox9, Decoration3, Decoration10, BorderBox6 } from '@jiaminghi/data-view-react'
import style from './index.less'

export default function Section({children, title}) {
    return (
        <BorderBox6 className="border-padding-1 ">
            <div className={style.section}>
                <header className="section-header">
                    {title}
                    <Decoration10 className="section-header-dect" />
                </header>
                <div className="section-container">
                    {children}
                </div>
            </div>
        </BorderBox6>
    )
}
