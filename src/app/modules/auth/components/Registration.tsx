/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {register} from '../redux/AuthCRUD'
import {Link, useHistory} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import InputField from '../../../components/auth/InputField'
import SelectField from '../../../components/auth/selectField'
import SubmitButton from '../../../components/auth/SubmitButton'
import CancelButton from '../../../components/auth/CancelButtom'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  position: '',
  type: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is required'),
  last_name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Last name is required'),
  position: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Position is required'),
  type: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Business Type is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        register(
          values.email,
          values.first_name,
          values.last_name,
          values.password,
          values.position,
          values.type
        )
          .then(({data: {user}}) => {
            setLoading(false)
            history.push('/auth/resend')
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('Registration process has broken')
          })
      }, 1000)
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <form
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
        noValidate
        id='kt_login_signup_form'
        onSubmit={formik.handleSubmit}
      >
        <div className='mb-10 text-center'>
          <h1 className='text-dark mb-3'>Create an Account</h1>

          <div className='text-gray-400 fw-bold fs-4'>
            Already have an account?
            <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
              Forgot Password ?
            </Link>
          </div>
        </div>

        <div className='d-flex align-items-center mb-10'>
          <div className='border-bottom border-gray-300 mw-100 w-100'></div>
        </div>

        {formik.status && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>{formik.status}</div>
          </div>
        )}

        <div className='row fv-row mb-7'>
          <InputField
            title='First name'
            autoComplete='off'
            className='position-relative mb-3'
            formik={formik}
            formikTouched={formik.touched.first_name}
            formikErrors={formik.errors.first_name}
            formikTitle='first_name'
            type='text'
          />
        </div>
        <div className='row fv-row mb-7'>
          <InputField
            title='Last name'
            autoComplete='off'
            formik={formik}
            formikTouched={formik.touched.last_name}
            formikErrors={formik.errors.last_name}
            formikTitle='last_name'
            type='text'
          />
        </div>
        <div className='row fv-row mb-7'>
          <InputField
            title='Email'
            autoComplete='off'
            formik={formik}
            formikTouched={formik.touched.email}
            formikErrors={formik.errors.email}
            formikTitle='email'
            type='text'
          />
        </div>
        <div className='row fv-row mb-7'>
          <InputField
            title='Position / Job Title'
            autoComplete='off'
            formik={formik}
            formikTouched={formik.touched.position}
            formikErrors={formik.errors.position}
            formikTitle='position'
            type='text'
          />
        </div>
        <div className='row fv-row mb-7'>
          <SelectField
            title='Business Type'
            formik={formik}
            formikTouched={formik.touched.type}
            formikErrors={formik.errors.type}
            formikTitle='type'
          >
            <option value='Company'>Company</option>
            <option value='Fund'>Fund</option>
          </SelectField>
        </div>
        <div className='mb-10 fv-row' data-kt-password-meter='true'>
          <div className='mb-1'>
            <InputField
              title='Password'
              autoComplete='off'
              formik={formik}
              formikTouched={formik.touched.password}
              formikErrors={formik.errors.password}
              formikTitle='password'
              type='password'
            />
          </div>
          <div className='text-muted'>
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </div>
        </div>

        <div className='fv-row mb-5'>
          <InputField
            title='Confirm Password'
            autoComplete='off'
            formik={formik}
            formikTouched={formik.touched.confirmPassword}
            formikErrors={formik.errors.confirmPassword}
            formikTitle='confirmPassword'
            type='password'
          />
        </div>

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
              I Agree to the{' '}
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
        <div className='text-center'>
          <SubmitButton
            isSubmitting={formik.isSubmitting}
            isValid={formik.isValid}
            acceptTerms={formik.values.acceptTerms}
            loading={loading}
            id='kt_sign_up_submit'
            text='Submit'
            className='btn btn-lg btn-primary w-100 mb-5'
          />
          <CancelButton
            id='kt_login_signup_form_cancel_button'
            linkPath='/auth/login'
            text='Cancel'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          />
        </div>
      </form>
    </div>
  )
}
