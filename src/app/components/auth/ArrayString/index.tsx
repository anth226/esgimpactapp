import {FormikProps, FieldInputProps} from 'formik'
import React, {useState} from 'react'

interface ArrayProps<V = any, FormValues = any> {
  field: FieldInputProps<V>
  form: FormikProps<FormValues>
}

const ArrayString: React.FC<ArrayProps> = (props: ArrayProps) => {
  const [value, setValue] = useState(props.field.value || [])

  const onChangeText = (e: any, index: number) => {
    value[index] = e.target.value
    onUpdateForm(value)
  }

  const onRemove = (e: any, index: number) => {
    e.preventDefault()
    value.splice(index, 1)
    onUpdateForm(value)
  }

  const onAdd = (e: any) => {
    e.preventDefault()
    value.push('')
    onUpdateForm(value)
  }

  const onUpdateForm = (value: Array<string>) => {
    setValue(value)
    props.form.setFieldValue(props.field.name, value)
  }

  return (
    <div className='array-string-formik'>
      {value.map((item: string, index: number) => (
        <div className='d-flex mb-2' key={index}>
          <input
            onChange={(e) => onChangeText(e, index)}
            value={value[index]}
            className='form-control form-control-sm form-control-solid'
          />
          <button onClick={(e) => onRemove(e, index)} className='btn btn-sm btn-secondary'>
            X
          </button>
        </div>
      ))}
      <button onClick={onAdd} className='btn btn-primary'>
        Add
      </button>
    </div>
  )
}

export default ArrayString
