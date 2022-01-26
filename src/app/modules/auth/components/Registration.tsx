/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import * as auth from '../redux/AuthRedux'
import {register} from '../redux/AuthCRUD'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import { PasswordMeterComponent } from "../../../../_metronic/assets/ts/components";
import InputField from '../../../components/auth/InputField'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Minimum 2 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(2, 'Minimum 2 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        register(values.email, values.firstname, values.lastname, values.password, values.changepassword)
          .then(({data: {api_token}}) => {
            setLoading(false)
            dispatch(auth.actions.login(api_token))
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('Registration process has broken')
          })
      }, 1000)
    },
  })

  useEffect(()=>{
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create an Account</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-400 fw-bold fs-4'>
          Already have an account?
          <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
            Forgot Password ?
          </Link>
        </div>
        {/* end::Link */}
      </div>
      {/* end::Heading */}



      <div className='d-flex align-items-center mb-10'>
        <div className='border-bottom border-gray-300 mw-100 w-100'></div>
      </div>

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      <div className='row fv-row mb-2'>
        <InputField
          title="First name"
          autoComplete="off"
          formik={formik}
          className="position-relative mb-3"
          formikTouched={formik.touched.firstname}
          formikErrors={formik.errors.firstname}
          formikTitle="firstname"
          type="text"
        />
      </div>
      <div className='row fv-row mb-2'>
        <InputField
          title="Last name"
          className="position-relative mb-3"
          autoComplete="off"
          formik={formik}
          formikTouched={formik.touched.lastname}
          formikErrors={formik.errors.lastname}
          formikTitle="lastname"
          type="text"
        />
      </div>
      <div className='row fv-row mb-2'>
        <InputField
          title="Email"
          autoComplete="off"
          className="position-relative mb-3"
          formik={formik}
          formikTouched={formik.touched.email}
          formikErrors={formik.errors.email}
          formikTitle="email"
          type="text"
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <InputField
            className="position-relative mb-3"
            title="Password"
            autoComplete="off"
            formik={formik}
            formikTouched={formik.touched.password}
            formikErrors={formik.errors.password}
            formikTitle="password"
            type="password"
          />
        </div>
        <div className="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}

      <div className='fv-row mb-2'>
        <InputField
          title="Confirm Password"
          autoComplete="off"
          className="position-relative mb-3"
          formik={formik}
          formikTouched={formik.touched.changepassword}
          formikErrors={formik.errors.changepassword}
          formikTitle="changepassword"
          type="text"
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.changepassword}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...formik.getFieldProps('acceptTerms')}
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I Agree the{' '}
            <Link to='/auth/terms' className='ms-1 link-primary'>
              terms and conditions
            </Link>
            .
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.acceptTerms}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
