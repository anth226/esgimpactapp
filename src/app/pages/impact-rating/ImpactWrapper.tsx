/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import ImpactHeader from './ImpactHeader'
import {Redirect, Route, Switch} from 'react-router-dom'

import {About} from './components/About'
import {Examples} from './components/Examples'

const ImpactPage: React.FC = () => {
  return (
    <>
      <ImpactHeader />

      <Switch>

        <Route path='/impact-rating/about' component={About} />
        <Route path='/impact-rating/examples' component={Examples} />

        <Redirect to='/impact-rating/about' />

      </Switch>
      
    </>
  )
}

const ImpactWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Impact Rating</PageTitle>
      <ImpactPage />
    </>
  )
}

export {ImpactWrapper}
