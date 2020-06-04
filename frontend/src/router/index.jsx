import React from 'react'
import { Router as ReactRouter, Switch, Route, Redirect } from 'react-router'
import history from './history'
import Layout from '../layout'
import Opinion from '@/pages/opinion'
import Analysis from '@/pages/analysis'

export default function Router() {
    return (
        <ReactRouter history={history}>
            <Layout>
                <Switch>
                    <Route path="/option" component={Opinion} />
                    <Route path="/analysis" component={Analysis} />
                    <Redirect from="/" to="/option" />
                </Switch>
            </Layout>
        </ReactRouter>
    )
}
