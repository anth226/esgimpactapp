import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {KTSVG} from '../../../../../_metronic/helpers'

const Company4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Finance</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Select all <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
            operating currencies</a> of (Assumed Name).
        </label>
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='operating_currencies'
          placeholder='Operating Currencies'
          label='Operating Currencies'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='operating_currencies' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>What is (Assumed Name)'s <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          Trailing Twelve Month</a> revenue?</label>
          
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='ttm_revenue'
          placeholder='TTM Revenue'
          label='TTM Revenue'
        ></Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue' />
        </div>

        <Field
          as='select'
          name='ttm_revenue_currency'
          className='form-control form-control form-control-solid'
          placeholder='TTM Revenue Currency'
          label='TTM Revenue Currency'
        >
          <option value=''>TTM Currency...</option>
          <option value='USD'>USD - USA Dollar ($)</option>
          <option value='USD'>EUR - European Union Euro (€)</option>
          <option value='GBP'>GBP - British Pound (£)</option>
          <option value='AUD'>AUD - Australian Dollar ($)</option>
          <option value='JPY'>JPY - Japanese Yen (¥)</option>
          <option value='SEK'>SEK - Swedish Krona (kr)</option>
          <option value='CAD'>CAD - Canadian Dollar ($)</option>
          <option value='CAD'>CNY - Chinese Renminbi ($)</option>
          <option value='CHF'>CHF - Swiss Franc (CHf)</option>
          <option value='CRYPTO'>Cryptocurrency</option>
          <option value='OTHER'>Other</option>
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue_currency' />
        </div>
        
      </div>

        

      <div className='fv-row'>
        <label className='form-label'>Are you currently <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          net positive</a>?</label>
          <div className='row'>
            <div className='col-lg-6'>
              <Field
                type='radio'
                className='btn-check'
                name='net_positive'
                value='yes'
                id='kt_create_account_form_account_type_personal'
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
                htmlFor='kt_create_account_form_account_type_personal'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr084.svg'
                  className='svg-icon-3x me-5'
                />

                <span className='d-block fw-bold text-start'>
                  <span className='text-dark fw-bolder d-block fs-4 mb-2'>Yes</span>                  
                  </span>
              </label>
            </div>

            <div className='col-lg-6'>
              <Field
                type='radio'
                className='btn-check'
                name='accountType'
                value='no'
                id=''
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                htmlFor='kt_create_account_form_account_type_corporate'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr088.svg' className='svg-icon-3x me-5' />

                <span className='d-block fw-bold text-start'>
                  <span className='text-dark fw-bolder d-block fs-4 mb-2'>No</span>
                </span>
              </label>
            </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='net_positive' />
        </div>
      </div>

    </div>
  )
}
export {Company4}
