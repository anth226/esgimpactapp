/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const BenchmarkPage: FC = () => (
  <>
  Benchmark Page
  </>
)

const BenchmarkWrapper: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Benchmark'})}</PageTitle>
      <BenchmarkPage />
    </>
  )
}

export {BenchmarkWrapper}
