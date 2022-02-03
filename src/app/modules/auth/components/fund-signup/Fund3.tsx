import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Fund3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
        <div className='text-gray-400 fw-bold fs-6'>
          For more help, check out our 
          <a href='#' className='link-primary fw-bolder'>
            {' '}
            example
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>How many full-time employees work at (Assumed Name)?</label>
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
          What is the address of the (Assumed Name)'s headquarters?
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
          What are the addresses of (Assumed Name)'s additional locations?
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
        <label className='form-label mb-3'>What are (Assumed Name)'s <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          operating countries</a>?</label>
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
