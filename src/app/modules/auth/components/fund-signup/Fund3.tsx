import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import ArrayString from '../../../../components/auth/ArrayString'

interface IProps {
  openModal: Function
  assumed_name: string
}

const Fund3: FC<IProps> = (props: IProps) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          How many full-time employees work at {props.assumed_name}?
        </label>
        <Field
          type='number'
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
          What is the address of the {props.assumed_name}'s headquarters?
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
          What are the addresses of {props.assumed_name}'s additional locations?
        </label>
        <Field name='other_addresses' component={ArrayString} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='other_addresses' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What are {props.assumed_name}'s{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('operating-countries')}
          >
            operating countries
          </Link>
          ?
        </label>
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
