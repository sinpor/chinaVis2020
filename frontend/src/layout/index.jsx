import React from 'react'
import { Layout } from 'antd'
import { FullScreenContainer, BorderBox1, BorderBox7, Decoration5 } from '@jiaminghi/data-view-react'
import style from './index.less'
import Clock from '@/components/clock'
import { Link } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const { Header, Content } = Layout

export default function BasicLayout({children}) {
    return (
        <FullScreenContainer>
                <Layout className={style['layout']}>
                    <Header className="layout-header">
                        <div><Clock /></div>
                        <div className="layout-header-title">
                            <div>新冠疫情模拟预测与多尺度舆情监测分析系统</div>
                            <Decoration5 className="title-decorate" />
                        </div>
                        <div className="layout-header-menu">
                            
                            <span><BorderBox7><span className="menu-item">
                                <Link to='/analysis' >疫情分析</Link>
                            </span></BorderBox7></span>
                            <span><BorderBox7><span className="menu-item">
                                <Link to='/option' >舆情信息</Link>
                            </span></BorderBox7></span>
                            {/* <span><BorderBox7><span className="menu-item">
                                <Link to='/optionAnly' >舆情情感</Link>
                            </span></BorderBox7></span> */}
                            <span><BorderBox7><span className="menu-item">
                                <Link to='/network' >社交网络</Link>
                            </span></BorderBox7></span>
                        </div>
                    </Header>
                    <BorderBox1 className="border-padding-3 layout-border">
                        <Content className="layout-content">
                            <ConfigProvider locale={zhCN}>
                                {children}
                            </ConfigProvider>
                        </Content>
                    </BorderBox1>
                </Layout>
        </FullScreenContainer>
    )
}
