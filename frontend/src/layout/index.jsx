import React from 'react'
import { Layout } from 'antd'
import './index.less'

const { Header, Content } = Layout

export default function BasicLayout({children}) {
    return (
        <Layout className='layout'>
            <Header className='layout-header'>
                <div className='layout-header-title'>
                    新冠疫情模拟预测与多尺度舆情监测分析系统
                </div>
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
    )
}
