/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {ResendPage} from './components/Resend'
import {Verify} from './components/Verify'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {CompanySignupWrapper} from './components/company-signup/CompanySignupWrapper'
import {FundSignupWrapper} from './components/fund-signup/FundSignupWrapper'
import {ResetPassword} from './components/ResetPassword'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <div
      /*className='d-flex flex-column img-fluid w-100 flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-attachment-fixed'*/
      className='img-fluid flex-column-fluid bgi-position-y-bottom bgi-no-repeat bgi-size-cover'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/backgrounds/authbackground.jpg')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/esgilogo.png')} className='h-45px' />
        </a>
        {/* end::Logo */}
        <Switch>
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/registration' component={Registration} />
          <Route path='/auth/forgot-password' component={ForgotPassword} />
          <Route path='/auth/resend' component={ResendPage} />
          <Route path='/auth/verify/:token' component={Verify} />
          <Route path='/auth/setup/company' component={CompanySignupWrapper} />
          <Route path='/auth/setup/fund' component={FundSignupWrapper} />
          <Route path='/auth/reset-password/user/:token' component={ResetPassword} />
          <Redirect from='/auth' exact={true} to='/auth/login' />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Privacy Policy
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}
