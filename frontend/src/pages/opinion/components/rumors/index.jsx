import React, { useEffect, useState } from 'react'
import Section from '@/components/section'
import { Table } from 'antd'
import HeatMap from '../heatMap'
import axios from '@/services'

const columns = [{
    title: '日期',
    dataIndex: 'data'
},
{
    title: '谣言内容',
    dataIndex: 'title'
},
{
    title: '辟谣',
    dataIndex: 'author'
},]

export default function Index() {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        function initTableData() {
            axios('谣言.json').then(res => {
                setTableData(res)
            })
        }
        initTableData()
        return () => {
            
        }
    }, [])
    return (
        <div>
            <Section title="谣言分析">
                {/* <Table
                    rowKey="data"
                    columns={columns}
                    dataSource={tableData}
                /> */}

            </Section>
            <Section title="每日谣言热点分布">
                <HeatMap />

            </Section>
        </div>
    )
}