/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Company1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Terms & Conditions
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='You must accept the terms to continue.'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>To continue, please accept the terms.</div>
      </div>

      <div className='fv-row mb-3'>
        <label className='form-label mb-3'>
          We understand that your company information is private, especially when it comes to ESG
          reporting. We will not sell your submitted information or use it outside of our regular
          operations as outlined in our{' '}
          <a href='#' className='link-primary fw-bolder'>
            terms & conditions
          </a>{' '}
          and{' '}
          <a href='#' className='link-primary fw-bolder'>
            privacy policy.
          </a>
        </label>
      </div>

      <div className='fv-row'>
        <div className='form-check form-check-custom form-check-solid'>
          <Field
            className='form-check-input'
            name='acceptTerms'
            type='checkbox'
            id='kt_login_toc_agree'
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I agree to the terms and conditions and privacy policy.
          </label>
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='acceptTerms' />
        </div>
      </div>
    </div>
  )
}

export {Company1}
