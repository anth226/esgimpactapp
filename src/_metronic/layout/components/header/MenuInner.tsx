import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'
import {DefaultTitle} from '../header/page-title/DefaultTitle'
import clsx from 'clsx'
import {useLayout} from '../../core'

export function MenuInner() {
  const intl = useIntl()
  const {classes} = useLayout()

  return (
    <>
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        
      </div>
    </>
  )
}
