import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Company2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Information
          <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Provide your basic company information.'
          ></i>
        </h2>
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
        <label className='form-label mb-3'>
          What is the <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
            Assumed Name
          </a> and <a href='#' className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
            Legal Name
          </a> of your organization?
        </label>

        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='assumed_name'
          placeholder="Assumed Name"
          label="Assumed Name"
          >
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='assumed_name' />
        </div>

        <Field
          type='text'
          className='form-control form-control form-control-solid'
          name='legal_name'
          placeholder="Legal Name"
          label="Legal Name">
        </Field>
      
        <div className='text-danger mt-2'>
          <ErrorMessage name='legal_name' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          What is your <a href='#' className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          legal formation</a>?
        </label>

        <Field
          as='select'
          name='legal_formation'
          className='form-select form-select-lg form-select-solid'
          label="Legal Formation"
        >
          <option></option>
          <option value='1'>S Corporation</option>
          <option value='2'>C Corporation</option>
          <option value='3'>Sole Proprietorship</option>
          <option value='4'>Non-profit</option>
          <option value='5'>Limited Liability</option>
          <option value='6'>General Partnership</option>
          <option value='7'>Other</option>
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='legal_formation' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Business Description</label>

        <Field
          as='textarea'
          name='description'
          className='form-control form-control-lg form-control-solid'
          rows={5}
          placeholder="Business Description"
          label="Business Description"
        ></Field>
      </div>
      
      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>What is your <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          mission statement</a> or statement of purpose?
        </label>

        <Field
          as='textarea'
          className='form-control form-control-lg form-control-solid mb-5'
          name='mission_statement'
          rows={3}
          placeholder="Mission Statement"
          label="Mission Statement"
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
          name='company_website'
          placeholder="Company Website"
          label="Company Website"
        />
      
        <div className='text-danger mt-2'>
          <ErrorMessage name='company_website' />
        </div>
      </div>
    </div>
  )}
export {Company2}
