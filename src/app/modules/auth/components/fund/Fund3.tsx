import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Fund3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What are the sectors in which operates, as defined by the Sustainable Industry
          Classification System®?{' '}
          <i className='fas fa-exclamation-circle ms-2 fs-7' data-bs-toggle='tooltip'></i>
        </label>
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='sics_codes'
          placeholder='SICS Codes'
          label='SICS Codes'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='sics_codes' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>How many full-time employees work at your company?</label>
        <Field
          type='text'
          name='number_employees'
          className='form-control form-control form-control-solid'
          placeholder='Number of Employees'
          label='Number of Employees'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='number_employees' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          What are the addresses of the company's headquarters and additional locations?
        </label>
        <Field
          type='text'
          name='primary_address'
          className='form-control form-control-lg form-control-solid'
          placeholder='Primary Address'
          label='Primary Address'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='primary_address' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Select all the geographic countries in which the company operates?
        </label>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid mb-5'
          name='other_addresses'
          placeholder='Other Addresses'
          label='Other Addresses'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='other_addresses' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>What are the company's operating countries?</label>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid mb-5'
          name='operating_countries'
          placeholder='Operating Countries'
          label='Operating Countries'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='operating_countries' />
        </div>
      </div>
    </div>
  )
}
export {Fund3}
