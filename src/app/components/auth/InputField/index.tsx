import React, {FC} from 'react';
import clsx from 'clsx'
import {InputFieldModel} from './models/InputFiledModel';
import { Link } from 'react-router-dom';

const InputField: FC<InputFieldModel> = ({title, formikTouched, autoComplete, formik, formikErrors, formikTitle, type, lablePath, className}) => {
    return (
        <>
        <div className={className}>
          {lablePath ? (
            <div className='d-flex justify-content-between mt-n5'>
              <div className='d-flex flex-stack mb-2'>
                <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                <Link
                  to='/auth/forgot-password'
                  className='link-primary fs-6 fw-bolder'
                  style={{marginLeft: '5px'}}
                >
                  Forgot Password ?
                </Link>
              </div>
            </div>
            ) : (
            <label className='class="form-label fw-bolder text-dark fs-6 mb-3'>{title}</label>
          )}
          <input
            placeholder={title}
            type={type}
            name={formikTitle}
            autoComplete={autoComplete}
            {...formik.getFieldProps(`${formikTitle}`)}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {
                'is-invalid': formikTouched && formikErrors,
              },
              {
                'is-valid': formikTouched && !formikErrors,
              }
            )}
          />
          {formikTouched && formikErrors && (
            <div className='fv-plugins-message-container'>
              <div className='text-danger'>
                <span role='alert'>{formikErrors}</span>
              </div>
            </div>
          )}
        </div>
        {title === 'Password' && !lablePath &&
            <div
                className="d-flex align-items-center mb-3 mt-3"
                data-kt-password-meter-control="highlight"
            >
                <div
                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                ></div>
                <div
                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                ></div>
                <div
                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                ></div>
                <div
                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
                ></div>
            </div>
        }
        </>
    )
}

export default InputField;