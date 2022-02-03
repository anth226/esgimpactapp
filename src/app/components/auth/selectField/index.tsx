import React, {FC} from 'react'
import clsx from 'clsx'
import {SelectFieldModel} from './models/SelectFieldModel'

const SelectField: FC<SelectFieldModel> = ({
  title,
  formikTouched,
  formik,
  formikErrors,
  formikTitle,
  className,
  children,
}) => {
  return (
    <>
      <div className={className}>
        <label className='class="form-label fw-bolder text-dark fs-6 mb-3'>{title}</label>
        <select
          placeholder={title}
          name={formikTitle}
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
        >
          {children}
        </select>
        {formikTouched && formikErrors && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formikErrors}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SelectField
