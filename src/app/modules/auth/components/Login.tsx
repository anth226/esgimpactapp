/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {login} from '../redux/AuthCRUD'
import InputField from '../../../components/auth/InputField'
import SubmitButton from '../../../components/auth/SubmitButton'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        login(values.email, values.password)
          .then(({data: {api_token}}) => {
            setLoading(false)
            dispatch(auth.actions.login(api_token))
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login details are incorrect')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to ESG Impact</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link to='/auth/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link>
        </div>
      </div>

      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

      <div className='fv-row mb-10'>
        <InputField
          title="Email"
          autoComplete="off"
          formik={formik}
          formikTouched={formik.touched.email}
          formikErrors={formik.errors.email}
          formikTitle="email"
          type="email"
        />
      </div>

      <div className='fv-row mb-10'>
        <InputField
          title="Password"
          autoComplete="off"
          formik={formik}
          formikTouched={formik.touched.password}
          formikErrors={formik.errors.password}
          formikTitle="password"
          type="password"
          lablePath="/auth/forgot-password"
        />
      </div>

      <div className='text-center'>
        <SubmitButton
          id="kt_sign_in_submit"
          isSubmitting={formik.isSubmitting}
          isValid={formik.isValid}
          text="Continue"
          loading={loading}
          className="btn btn-lg btn-primary w-100 mb-5"
        />
      </div>
    </form>
  )
}
