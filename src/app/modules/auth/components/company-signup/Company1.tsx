/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'

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

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more help, please check out our
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            example
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Lorem Ipsum. This is a placeholder for our terms & conditions text that will go here.
          There could even be a link to a modal with the entire legal text written out. We have a
          legal team... I wonder how much it would be for them to do this @ Max?
        </label>
      </div>
    </div>
  )
}

export {Company1}
