import {Options} from 'react-select'
import {FieldInputProps, FormikErrors} from 'formik'

interface FormikModel {
  getFieldProps: (arg: string) => FieldInputProps<any>
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>
}

export interface SelectFieldModel {
  title?: string
  formikTitle?: string
  formikErrors?: string
  formik: FormikModel
  formikTouched?: boolean
  className?: string
  options: Options<any>
}
