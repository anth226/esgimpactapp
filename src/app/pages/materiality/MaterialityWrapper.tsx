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
import { CSSTransition } from 'react-transition-group'

import {About} from './components/About'
import {Examples} from './components/Examples'
import {AssessmentWrapper} from './AssessmentWrapper'

const MaterialityPage: React.FC = () => {
  return (
    <>
      {/* <MaterialityHeader /> */}

      <Switch>

        <Route path='/materiality/about' component={About} />
        <Route path='/materiality/examples' component={Examples} />
        <Route path='/materiality/assessment' component={AssessmentWrapper} />

        <Redirect to='/materiality/about' />

      </Switch>
      
    </>
  )
}

const MaterialityWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Materiality Matrix</PageTitle>
      <MaterialityPage />
    </>
  )
}

export {MaterialityWrapper}
