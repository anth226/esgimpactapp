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

const netPositives = [
  {value: 'YES', label: 'YES'},
  {value: 'NO', label: 'NO'},
]

const Company4: FC<IProps> = (props: IProps) => {
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
        <label className='form-label'>
          What is {props.assumed_name}'s{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('ttm-revenue')}
          >
            Trailing Twelve Month revenue
          </Link>
          ?
        </label>

        <Field
          type='number'
          className='form-control form-control form-control-solid mb-5'
          name='ttm_revenue'
          placeholder='TTM Revenue'
          label='TTM Revenue'
        ></Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue' />
        </div>

        <Field name='ttm_revenue_currency' component={CustomDropDown} options={currencies} />

        <div className='text-danger mt-2'>
          <ErrorMessage name='ttm_revenue_currency' />
        </div>
      </div>

      <div className='fv-row'>
        <label className='form-label'>
          Are you currently{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('net-positive')}
          >
            net positive
          </Link>
          ?
        </label>
        <Field name='net_positive' component={CustomDropDown} options={netPositives} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='net_positive' />
        </div>
      </div>
    </div>
  )
}
export {Company4}
