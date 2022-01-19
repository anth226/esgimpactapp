import React, {FC} from 'react';
import clsx from 'clsx'
import {InputFieldModel} from './models/InputFiledModel';

const InputField: FC<InputFieldModel> = ({title, formikTouched, autoComplete, formik, formikErrors, formikTitle}) => {
    console.log(formik, 'formILL');
    console.log(formikTitle, "Title");
    
    return (
        <>
        <div className='col-xl-6'>
          <label className='class="form-label fw-bolder text-dark fs-6'>{title}</label>
          <input
            placeholder={title}
            type='text'
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
              <div className='fv-help-block'>
                <span role='alert'>{formikErrors}</span>
              </div>
            </div>
          )}
        </div>
        {title === 'Password' &&
            <div
                className="d-flex align-items-center mb-3"
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