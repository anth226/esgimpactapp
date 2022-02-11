import {FormikProps, FieldInputProps} from 'formik'
import React, {useState} from 'react'
import PlaceAutoComplete from '../../places-auto-complete'

interface ArrayProps<V = any, FormValues = any> {
  field: FieldInputProps<V>
  form: FormikProps<FormValues>
}

const ArrayString: React.FC<ArrayProps> = (props: ArrayProps) => {
  const [values, setValue] = useState(props.field.value || [])
  const [address, setAdress] = useState('')

  const onRemove = (e: any, index: number) => {
    e.preventDefault()
    values.splice(index, 1)
    onUpdateForm(values)
  }

  const onAdd = (e: any) => {
    e.preventDefault()
    values.push('')
    setAdress('')
    onUpdateForm(values)
  }

  const onUpdateForm = (value: Array<string>) => {
    setValue(value)
    props.form.setFieldValue(props.field.name, value)
  }

  const handleSelect = async (value: any) => {
    values[values.length - 1] = value
    setAdress(value)
    onUpdateForm(values)
  }

  return (
    <div className='array-string-formik'>
      {values.map((item: string, index: number) => (
        <div className='d-flex mb-2' key={index}>
          <PlaceAutoComplete
            address={item || address}
            setAddress={setAdress}
            handleSelect={handleSelect}
          />
          <button
            style={{height: '45px'}}
            onClick={(e) => onRemove(e, index)}
            className='btn btn-sm btn-secondary'
          >
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
