import React from 'react'
import Section from '@/components/section'
import { Table } from 'antd'

const columns = [{
    title: '日期',
    dataIndex: 'date'
},
{
    title: '谣言内容',
    dataIndex: 'date'
},
{
    title: '辟谣',
    dataIndex: 'date'
},]

export default function Index() {
    return (
        <div>
            <Section title="谣言分析">
                <Table
                    columns={columns}
                    dataSource={[]}
                />

            </Section>
            <Section title="每日谣言热点分布">
                

            </Section>
        </div>
    )
}
