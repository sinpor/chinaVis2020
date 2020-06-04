import React from 'react'
import { ScrollBoard } from '@jiaminghi/data-view-react'
import Section from '@/components/section'

const config = {
    header: new Array(4).fill('column'),
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
    ]
}

export default function index() {
    return (
        <Section title="舆论列表">
            <ScrollBoard config={config} />
        </Section>
    )
}

