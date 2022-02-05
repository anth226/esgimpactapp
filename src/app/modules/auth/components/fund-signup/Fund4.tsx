import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'

interface IProps {
  openModal: Function
}

const Fund4: FC<IProps> = (props: IProps) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Finance</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Select all{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('operating-currencies')}
          >
            operating currencies
          </Link>{' '}
          of (Assumed Name).
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
        <label className='form-label mb-3'>Fund Type</label>
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='fund_type'
          placeholder='Fund Type'
          label='Fund Type'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='fund_type' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>Fund Number</label>
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='fund_number'
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
