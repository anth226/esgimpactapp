import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import CustomDropDown from '../../../../components/auth/CustomSelect'

interface IProps {
  openModal: Function
}

const lfOptions = [
  {value: 'Corporation', label: 'Corporation'},
  {value: 'Sole Proprietorship', label: 'Sole Proprietorship'},
  {value: 'Non-profit', label: 'Non-profit'},
  {value: 'Limited Liability', label: 'Limited Liability'},
  {value: 'General Partnership', label: 'General Partnership'},
  {value: 'Other', label: 'Other'},
]

const Fund2: FC<IProps> = (props: IProps) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>
          Information
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your basic company information.'
          ></i>
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          For more help, check out our{' '}
          <Link
            to='#'
            className='link-primary fw-bolder'
            onClick={() => props.openModal('information-example')}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            example
          </Link>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What is the{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            onClick={() => props.openModal('assumed-name')}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            Assumed Name
          </Link>{' '}
          and{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            onClick={() => props.openModal('legal-name')}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            Legal Name
          </Link>{' '}
          of your organization?
        </label>

        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='assumed_name'
          placeholder='Assumed Name'
          label='Assumed Name'
        ></Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='assumed_name' />
        </div>

        <Field
          type='text'
          className='form-control form-control form-control-solid'
          name='legal_name'
          placeholder='Legal Name'
          label='Legal Name'
        ></Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='legal_name' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          What is your{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            onClick={() => props.openModal('legal-information')}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            legal formation
          </Link>
          ?
        </label>

        <Field name='legal_formation' component={CustomDropDown} options={lfOptions} />

        <div className='text-danger mt-2'>
          <ErrorMessage name='legal_formation' />
        </div>
      </div>

      <div className='fv-row mb-10'>
      <label className='form-label'>Enter a dscription of your business.</label>
        <b>
            <i> (2-3 Sentences)</i>
        </b>
        <Field
          as='textarea'
          name='description'
          className='form-control form-control-lg form-control-solid'
          rows={4}
          placeholder='Business Description'
          label='Business Description'
        ></Field>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What is your{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            onClick={() => props.openModal('mission-statement')}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            mission statement
          </Link>{' '}
          or statement of purpose?
        </label>

        <Field
          as='textarea'
          className='form-control form-control-lg form-control-solid mb-5'
          name='mission_statement'
          rows={4}
          placeholder='Mission Statement'
          label='Mission Statement'
        />

        <div className='text-danger mt-2'>
          <ErrorMessage name='mission_statement' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>What is your company website?</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid mb-5'
          name='website'
          placeholder='Website'
          label='Website'
        />

        <div className='text-danger mt-2'>
          <ErrorMessage name='website' />
        </div>
      </div>
    </div>
  )
}
export {Fund2}
