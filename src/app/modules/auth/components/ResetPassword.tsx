import {useState, useEffect} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {resetPassword} from '../redux/AuthCRUD'
import InputField from '../../../components/auth/InputField'
import CancelButton from '../../../components/auth/CancelButtom'
import SubmitButton from '../../../components/auth/SubmitButton'
import {useParams, useHistory} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'

const initialValues = {
  password: '',
  confirmPassword: '',
}

const message = "Passwords don't match"

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], message)
    .required(),
})

interface queryParams {
  token: string
}

export const ResetPassword = () => {
  const {token}: queryParams = useParams()
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const history = useHistory()

  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      console.log(values)
      if (values.password === values.confirmPassword) {
        setTimeout(() => {
          resetPassword(token, values.password)
            .then(({data: {result}}) => {
              setHasErrors(false)
              setLoading(false)
              setTimeout(() => history.push('/auth/login'), 2000)
            })
            .catch(() => {
              setHasErrors(true)
              setLoading(false)
              setSubmitting(false)
              setStatus('The detail provided is incorrect')
            })
        }, 1000)
      } else {
        setHasErrors(true)
        setLoading(false)
        setSubmitting(false)
        setStatus('Password dont match')
      }
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
        id='kt_login_password_reset_form'
        onSubmit={formik.handleSubmit}
      >
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Reset Password</h1>
          <div className='text-gray-400 fw-bold fs-4'>Enter your new password.</div>
        </div>

        {hasErrors === true && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>
              Sorry, your token has expired. Please attempt to reset your password again.
            </div>
          </div>
        )}

        {hasErrors === false && (
          <div className='mb-10 bg-light-info p-8 rounded'>
            <div className='text-info text-center'>
              Password changed successfully. Please login with your new password.
            </div>
          </div>
        )}

        {hasErrors !== false && (
          <>
            <div className='fv-row mb-10' data-kt-password-meter='true'>
              <InputField
                type='password'
                autoComplete='off'
                formikTouched={formik.touched.password}
                formikErrors={formik.errors.password}
                title='Password'
                formikTitle='password'
                formik={formik}
              />
            </div>

            <div className='fv-row mb-10'>
              <InputField
                type='password'
                autoComplete='off'
                formikTouched={formik.touched.confirmPassword}
                formikErrors={formik.errors.confirmPassword}
                title='Confirm Password'
                formikTitle='confirmPassword'
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
          </>
        )}
      </form>
    </div>
  )
}
