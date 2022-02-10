import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import CustomDropDown from '../../../../components/auth/CustomSelect'

interface IProps {
  openModal: Function
  assumed_name: string
}

const currencies = [
  {value: 'USD', label: 'USD - USA Dollar ($)'},
  {value: 'EUR', label: 'EUR - European Union Euro (€)'},
  {value: 'GBP', label: 'GBP - British Pound (£)'},
  {value: 'AUD', label: 'AUD - Australian Dollar ($)'},
  {value: 'JPY', label: 'JPY - Japanese Yen (¥)'},
  {value: 'SEK', label: 'SEK - Swedish Krona (kr)'},
  {value: 'CAD', label: 'CAD - Canadian Dollar ($)'},
  {value: 'CNY', label: 'CNY - Chinese Renminbi ($)'},
  {value: 'CHF', label: 'CHF - Swiss Franc (CHf)'},
  {value: 'CRYPTO', label: 'Cryptocurrency'},
  {value: 'OTHER', label: 'Other'},
]

const ftypes = [
  {value: 'family office', label: 'Family Office'},
  {value: 'private equity group', label: 'Private Equity Group'},
  {value: 'venture capital firm', label: 'Venture Capital Firm'},
  {value: 'other', label: 'Other'},
]

const Fund4: FC<IProps> = (props: IProps) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Finance</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Select all{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('operating-currencies')}
          >
            operating currencies
          </Link>{' '}
          of {props.assumed_name}.
        </label>
        <Field
          name='operating_currencies'
          component={CustomDropDown}
          options={currencies}
          isMulti={true}
        />

        <div className='text-danger mt-2'>
          <ErrorMessage name='operating_currencies' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>Fund Type</label>
        <Field name='fund_type' component={CustomDropDown} options={ftypes} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='fund_type' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>Fund Number</label>
        <Field
          type='text'
          className='form-control form-control form-control-solid mb-5'
          name='fund_number'
          placeholder='Fund Number'
          label='Fund Number'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='fund_number' />
        </div>
      </div>
    </div>
  )
}
export {Fund4}
