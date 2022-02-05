/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import MaterialityHeader from './MaterialityHeader'
import {Redirect, Route, Switch} from 'react-router-dom'

import {About} from './components/About'
import {Examples} from './components/Examples'

const AccountPage: React.FC = () => {
  return (
    <>
      <MaterialityHeader />
      <Switch>
        <Route path='/materiality/about' component={About} />
        <Route path='/materiality/examples' component={Examples} />

        {/* <Redirect from='/materiality/about' exact={true} to='/materiality/examples' /> */}
        <Redirect to='/materiality/about' />
      </Switch>
    </>
  )
}

const MaterialityWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Materiality Matrix</PageTitle>
      <AccountPage />
    </>
  )
}

export {MaterialityWrapper}
