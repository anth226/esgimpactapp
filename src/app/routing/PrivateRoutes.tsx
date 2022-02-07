import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MaterialityWrapper} from '../pages/materiality/MaterialityWrapper'
import {ImpactWrapper} from '../pages/impact-rating/ImpactWrapper'
import {AnalystWrapper} from '../pages/analyst/AnalystWrapper'
import {SitemapWrapper} from '../pages/sitemap/SitemapWrapper'
import {GlobalImpactWrapper} from '../pages/global-impact/GlobalImpactWrapper'

export function PrivateRoutes() {

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        {/* Overview */}
        <Route path='/dashboard' component={DashboardWrapper} />

        {/* Assessments */}
        <Route path='/materiality' component={MaterialityWrapper} />
        <Route path='/impact-rating' component={ImpactWrapper} />

        {/* Resources */}
        <Route path='/analyst' component={AnalystWrapper} />

        {/* Community */}
        <Route path='/global-impact' component={GlobalImpactWrapper} />

        {/* Other */}
        <Route path='/sitemap' component={SitemapWrapper} />

        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
