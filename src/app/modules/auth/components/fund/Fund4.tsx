import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Fund4: FC = () => {
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
        <label className='form-label'>Select which type of fund:</label>
        <Field
          as='select'
          name='fund_type'
          className='form-select form-select-lg form-select-solid'
          label='Fund Type'
        >
          <option></option>
          <option value='family office'>Family Office</option>
          <option value='private equity group'>Private Equity Group</option>
          <option value='venture capital firm'>Venture Capital Firm</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='fund_type' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>What # fund are you on?</label>
        <Field
          type='text'
          name='fund_number'
          className='form-control form-control form-control-solid'
          placeholder='Fund Number'
          label='Fund Number'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='fund_number' />
        </div>
      </div>
    </div>
  )
}
export {Fund4}
