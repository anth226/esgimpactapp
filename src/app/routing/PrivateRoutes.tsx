import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {BenchmarkWrapper} from '../pages/benchmark/BenchmarkWrapper'
import {AnalystWrapper} from '../pages/analyst/AnalystWrapper'
import {Module} from '../resources/modules/module'

export function PrivateRoutes() {

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>

        {/* Overview */}
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/benchmark' component={BenchmarkWrapper} />

        {/* Resources */}
        <Route path='/analyst' component={AnalystWrapper} />
        <Route path='/module' component={Module} />

        {/* Other */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
