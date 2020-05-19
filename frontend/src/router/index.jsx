import React from 'react'
import { Router as ReactRouter, Switch, Route } from 'react-router'
import history from './history'
import Layout from '../layout'
import Opinion from '@/pages/opinion'

export default function Router() {
    return (
        <ReactRouter history={history}>
            <Layout>
                <Switch>
                    <Route path="/" component={Opinion} />
                </Switch>
            </Layout>
        </ReactRouter>
    )
}
