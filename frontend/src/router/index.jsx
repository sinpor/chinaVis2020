import React from 'react'
import { Router as ReactRouter, Switch, Route } from 'react-router'
import history from './history'
import Layout from '../layout'

export default function Router() {
    return (
        <ReactRouter history={history}>
            <Layout>
                <Switch>
                    <Route path="/" />
                </Switch>
            </Layout>
        </ReactRouter>
    )
}
