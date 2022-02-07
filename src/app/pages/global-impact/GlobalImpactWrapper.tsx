/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {Redirect, Route, Switch} from 'react-router-dom'


const GlobalImpactPage: React.FC = () => {
  return (
    <>
      Global Impact Page
    </>
  )
}

export default GlobalImpactPage

const GlobalImpactWrapper: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Global Impact'})}</PageTitle>
      <GlobalImpactPage />
    </>
  )
}

export {GlobalImpactWrapper}