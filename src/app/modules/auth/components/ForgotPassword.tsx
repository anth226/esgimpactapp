import React, {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {requestPassword} from '../redux/AuthCRUD'
import InputField from '../../../components/auth/InputField'
import CancelButton from '../../../components/auth/CancelButtom'
import SubmitButton from '../../../components/auth/SubmitButton'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <form
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
        noValidate
        id='kt_login_password_reset_form'
        onSubmit={formik.handleSubmit}
      >
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>
          <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div>
        </div>

        {hasErrors === true && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>
              Sorry, looks like there are some errors detected, please try again.
            </div>
          </div>
        )}

        {hasErrors === false && (
          <div className='mb-10 bg-light-info p-8 rounded'>
            <div className='text-info'>Sent password reset. Please check your email</div>
          </div>
        )}

        <div className='fv-row mb-10'>
          <InputField
            type='email'
            autoComplete='off'
            formikTouched={formik.touched.email}
            formikErrors={formik.errors.email}
            title='Email'
            formikTitle='email'
            formik={formik}
          />
        </div>

        <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
          <SubmitButton
            text='Submit'
            id='kt_password_reset_submit'
            className='btn btn-lg btn-primary fw-bolder me-4'
            loading={loading}
          />
          <CancelButton
            linkPath='/auth/login'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-lg btn-light-primary fw-bolder'
            disable={formik.isSubmitting || !formik.isValid}
            text='Cancel'
          />
        </div>
      </form>
    </div>
  )
}
