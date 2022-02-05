/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Overview</span>
        </div>
      </div>

      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen022.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Assessments</span>
        </div>
      </div>
      <AsideMenuItem
        to='/materiality'
        icon='/media/icons/duotune/abstract/abs027.svg'
        title='Materiality Matrix'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/abstract/abs014.svg'
        title='Impact Rating'
        fontIcon='bi-layers'
      />
      

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Resources</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='#'
        title='Resource Center'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/abstract/abs036.svg'
      >
        <AsideMenuItem to='#' title='Modules' hasBullet={true} />
        <AsideMenuItem to='#' title='Media' hasBullet={true} />
        <AsideMenuItem to='#' title='Templates' hasBullet={true} />
      </AsideMenuItemWithSub>

      {/* <AsideMenuItem
        to="/benchmark"
        title='Benchmark (Coming Soon)'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/graphs/gra001.svg'
      /> */}

      <AsideMenuItem
        to='/analyst'
        title='Analyst Contact'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com006.svg'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Community</span>
        </div>
      </div>

      <AsideMenuItem
        to='#'
        title='Global Impact'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/maps/map006.svg'
      >
      </AsideMenuItem>

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator border-1 mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='#'
          className='menu-link'
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Settings</span>
        </a>
      </div>
      
      <div className='menu-item'>
        <a
          target='#'
          className='menu-link'
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>FAQs</span>
        </a>
      </div>

      <AsideMenuItem
        to="/sitemap"
        title='Sitemap'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/files/fil020.svg'
      />


      <div className='menu-item'>
        <a
          target='#'
          className='menu-link'
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen016.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Customer Support</span>
        </a>
      </div>
    </>
  )
}
