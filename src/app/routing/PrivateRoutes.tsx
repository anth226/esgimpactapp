import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MaterialityWrapper} from '../pages/materiality/MaterialityWrapper'
import {AnalystWrapper} from '../pages/analyst/AnalystWrapper'
import {SitemapWrapper} from '../pages/sitemap/SitemapWrapper'

export function PrivateRoutes() {

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        {/* Overview */}
        <Route path='/dashboard' component={DashboardWrapper} />

        {/* Overview */}
        <Route path='/materiality' component={MaterialityWrapper} />

        {/* Resources */}
        <Route path='/analyst' component={AnalystWrapper} />

        {/* Other */}
        <Route path='/sitemap' component={SitemapWrapper} />

        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
