import React, {FC} from 'react'
import {SelectFieldModel} from './models/SelectFieldModel'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const SelectField: FC<SelectFieldModel> = ({
  title,
  formikTouched,
  formik,
  formikErrors,
  formikTitle,
  className,
  options,
}) => {
  const field = formik.getFieldProps(`${formikTitle}`)
  return (
    <>
      <div className={className}>
        <label className='class="form-label fw-bolder text-dark fs-6 mb-3'>{title}</label>
        <Select
          options={options}
          name={formikTitle}
          components={animatedComponents}
          closeMenuOnSelect={true}
          className='form-control form-control-solid'
          value={options ? options.find((option) => option.value === field.value) : ''}
          onChange={(option: any) => formik.setFieldValue(field.name, option.value)}
          onBlur={field.onBlur}
        />
        {formikTouched && formikErrors && (
          <div className='fv-plugins-message-container'>
            <div className='text-danger'>
              <span role='alert'>{formikErrors}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SelectField
