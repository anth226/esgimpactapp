/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Dropdown1, ChatInner} from '../../../_metronic/partials'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useIntl} from 'react-intl'
import {StatisticsWidget2} from '../../../_metronic/partials/widgets'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const ScheduleWrapper: FC = () => {
  const intl = useIntl()

  return (
  <>
    <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Schedule Meeting'})}</PageTitle>

  </>
  )
}

export {ScheduleWrapper}
