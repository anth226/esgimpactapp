import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {BenchmarkWrapper} from '../pages/benchmark/BenchmarkWrapper'
import {MessageWrapper} from '../pages/message/MessageWrapper'
import {ScheduleWrapper} from '../pages/schedule/ScheduleWrapper'
import {Module} from '../components/module'

export function PrivateRoutes() {

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>

        {/* Overview */}
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/benchmark' component={BenchmarkWrapper} />

        {/* Resources */}
        <Route path='/message' component={MessageWrapper} />
        <Route path='/schedule' component={ScheduleWrapper} />
        <Route path='/module' component={Module} />

        {/* Other */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
