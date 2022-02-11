import React, {FC, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import ArrayString from '../../../../components/auth/ArrayString'
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import PlaceAutoComplete from '../../../../components/places-auto-complete'

interface IProps {
  openModal: Function
  assumed_name: string
}

const Fund3: FC<IProps> = (props: IProps) => {
  const [address, setAddress] = useState('')

  // In case we may need coordinates in the future
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  })
  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value)
    const latlng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latlng)
  }

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label'>
          How many full-time employees work at {props.assumed_name}?
        </label>
        <Field
          type='number'
          name='number_employees'
          className='form-control form-control form-control-solid'
          placeholder='Number of Employees'
          label='Number of Employees'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='number_employees' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          What is the address of the {props.assumed_name}'s headquarters?
        </label>
        <PlaceAutoComplete
          address={address}
          handleSelect={handleSelect}
          setAddress={setAddress}
          name='primary_address'
          label='Primary Address'
          placeholder='Primary Address'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='primary_address' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What are the addresses of {props.assumed_name}'s additional locations?
        </label>

        <Field name='other_addresses' component={ArrayString} />

        <div className='text-danger mt-2'>
          <ErrorMessage name='other_addresses' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What are {props.assumed_name}'s{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('operating-countries')}
          >
            operating countries
          </Link>
          ?
        </label>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid mb-5'
          name='operating_countries'
          placeholder='Operating Countries'
          label='Operating Countries'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='operating_countries' />
        </div>
      </div>
    </div>
  )
}
export {Fund3}
