import React from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import {Field} from 'formik'

interface PAutoCompleteProps {
  address: string
  setAddress: (value: React.SetStateAction<string>) => void
  handleSelect: (value: any) => Promise<void>
  placeholder?: string
  label?: string
  name?: string
}

export default function PAutoComplete(props: PAutoCompleteProps) {
  const {address, setAddress, handleSelect, name, label, placeholder} = props
  return (
    <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div>
          <Field
            name={name}
            className='form-control form-control-lg form-control-solid'
            label={label}
            {...getInputProps({placeholder})}
          ></Field>
          <div style={{marginTop: '0px'}}>
            {loading ? <div style={{color: '#B7824B', fontWeight: 'bold'}}>Loading...</div> : null}
            {suggestions.map((suggestion, index) => {
              const cname = suggestion.active ? 'address-sugestions active' : 'address-sugestions'
              return (
                <div {...getSuggestionItemProps(suggestion, {className: cname, key: index})}>
                  {suggestion.description}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </PlacesAutoComplete>
  )
}
