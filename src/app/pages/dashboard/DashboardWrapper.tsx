/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import DashboardContent from './DashboardPage'
import {Redirect, Route, Switch} from 'react-router-dom'

const DashboardPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/dashboard/projects' component={DashboardContent} />

      {/* Will add appropriate components for Activity log and Users list*/}

      {/* <Route path='/dashboard/activity-log' component={} />
      <Route path='/dashboard/users-list' component={} /> */}

      <Redirect to='/dashboard/projects' />
    </Switch>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
