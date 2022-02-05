import {FormikProps, FieldInputProps} from 'formik'
import React from 'react'
import Select, {Options} from 'react-select'
import makeAnimated from 'react-select/animated'

interface SelectProps<V = any, FormValues = any> {
  options: Options<V>
  field: FieldInputProps<V>
  form: FormikProps<FormValues>
  isMulti: boolean
}

const animatedComponents = makeAnimated()

const SelectField: React.FC<SelectProps> = (props: SelectProps) => (
  <Select
    options={props.options}
    name={props.field.name}
    components={animatedComponents}
    value={props.options ? props.options.find((option) => option.value === props.field.value) : ''}
    onChange={(option: any) =>
      props.form.setFieldValue(
        props.field.name,
        !props.isMulti
          ? option.value
          : props.isMulti && option !== null
          ? option.map((item: any) => item.value)
          : []
      )
    }
    onBlur={props.field.onBlur}
    closeMenuOnSelect={true}
    isMulti={props.isMulti}
    className='form-control form-control-solid'
  />
)

export default SelectField
