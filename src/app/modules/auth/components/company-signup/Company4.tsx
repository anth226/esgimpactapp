import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Company4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Finance</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Select all currencies in which the company engages.
        </label>
        <i className='fas fa-exclamation-circle ms-2 fs-7' data-bs-toggle='tooltip'></i>
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
        <label className='form-label'>What is your Trailing Twelve Month revenue?</label>
        <Field
          type='text'
          className='form-control form-control form-control-solid'
          name='ttm_revenue'
          placeholder='TTM Revenue'
          label='TTM Revenue'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>What is your Trailing Twelve Month revenue currency?</label>
        <Field
          type='text'
          name='ttm_revenue_currency'
          className='form-control form-control form-control-solid'
          placeholder='TTM Revenue Currency'
          label='TTM Revenue Currency'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue_currency' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Are you currently net positive or net negative?</label>
        <Field
          type='text'
          name='net_positive'
          className='form-control form-control-lg form-control-solid'
          placeholder='Net Positive'
          label='Net Positive'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='net_positive' />
        </div>
      </div>
    </div>
  )
}
export {Company4}
