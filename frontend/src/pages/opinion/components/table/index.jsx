import React from 'react'
import { Table } from 'antd'

const columns = [
    {
        title: '',
        dataIndex: '',
    },
    {
        title: '',
        dataIndex: '',
    },
    {
        title: '',
        dataIndex: '',
    },
    {
        title: '',
        dataIndex: '',
    },
    {
        title: '',
        dataIndex: '',
    },
]

export default function index() {
    return (
        <Table
            columns={columns}
            dataSource={[]}
        />
    )
}

