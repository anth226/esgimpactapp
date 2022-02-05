import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import CustomDropDown from '../../../../components/auth/CustomSelect'
import ArrayString from '../../../../components/auth/ArrayString'

interface IProps {
  openModal: Function
  assumed_name: string
}

const indOptions = [
  {value: 'HC-MS', label: 'Healthcare - Medical Equipment & Supplies'},
  {value: 'HC-BP', label: 'Healthcare - Biotechnology & Pharmaceuticals'},
  {value: 'HC-DI', label: 'Healthcare - Distributors'},
  {value: 'HC-DY', label: 'Healthcare - Healthcare Delivery'},
  {value: 'HC-MC', label: 'Healthcare - Managed Care'},
  {value: 'HC-DR', label: 'Healthcare - Drug Retailers'},
  {value: 'CG-AA', label: 'Consumer Goods - Apparel, Accessories & Footwear'},
  {value: 'CG-AM', label: 'Consumer Goods - Appliance Manufacturing'},
  {value: 'CG-BF', label: 'Consumer Goods - Building Products & Furnishings'},
  {value: 'CG-HP', label: 'Consumer Goods - Household & Personal Products'},
  {value: 'CG-TS', label: 'Consumer Goods - Toys & Sporting Goods'},
  {value: 'CG-MR', label: 'Consumer Goods - Multiline & Specialty Retailers & Distributors'},
  {value: 'CG-EC', label: 'Consumer Goods - E-commerce'},
  {
    value: 'TC-ES',
    label:
      'Technology & Communications - Electronic Manufacturing Services & Original Design Manufacturing',
  },
  {value: 'TC-HW', label: 'Technology & Communications - Hardware'},
  {value: 'TC-IM', label: 'Technology & Communications - Internet Media & Services'},
  {value: 'TC-SC', label: 'Technology & Communications - Semiconductors'},
  {value: 'TC-SI', label: 'Technology & Communications - Software & IT Services'},
  {value: 'TC-TL', label: 'Technology & Communications - Telecommuncations Services'},
  {value: 'FB-AG', label: 'Food & Beverage - Agricultural Products'},
  {value: 'FB-AB', label: 'Food & Beverage - Alcoholic Beverages'},
  {value: 'FB-FR', label: 'Food & Beverage - Food Retailers & Distributors'},
  {value: 'FB-MP', label: 'Food & Beverage - Meat, Poultry & Dairy'},
  {value: 'FB-NB', label: 'Food & Beverage - Non-Alcoholic Beverages'},
  {value: 'FB-PF', label: 'Food & Beverage - Processed Foods'},
  {value: 'FB-RN', label: 'Food & Beverage - Restaurants'},
  {value: 'FB-TB', label: 'Food & Beverage - Tobacco'},
  {value: 'FN-AC', label: 'Financials - Asset Management & Custody Activities'},
  {value: 'FN-CB', label: 'Financials - Commercial Banks'},
  {value: 'FN-CF', label: 'Financials - Consumer Finance'},
  {value: 'FN-IN', label: 'Financials - Insurance'},
  {value: 'FN-IB', label: 'Financials - Investment Banking & Brokerage'},
  {value: 'FN-MF', label: 'Financials - Mortgage Finance'},
  {value: 'FN-EX', label: 'Financials - Security & Commodity Exchanges'},
  {value: 'IF-EU', label: 'Infrastructure - Electric Utilities & Power Generators'},
  {value: 'IF-EN', label: 'Infrastructure - Engineering & Construction Services'},
  {value: 'IF-GU', label: 'Infrastructure - Gas Utilities & Distributors'},
  {value: 'IF-HB', label: 'Infrastructure - Home Builders'},
  {value: 'IF-RE', label: 'Infrastructure - Real Estate'},
  {value: 'IF-RS', label: 'Infrastructure - Real Estate Services'},
  {value: 'IF-WM', label: 'Infrastructure - Waste Management'},
  {value: 'IF-WU', label: 'Infrastructure - Water Utilities & Services'},
  {value: 'SV-AD', label: 'Services - Advertising & Marketing'},
  {value: 'SV-CA', label: 'Services - Casinos & Gaming'},
  {value: 'SV-ED', label: 'Services - Education'},
  {value: 'SV-HL', label: 'Services - Hotels & Lodging'},
  {value: 'SV-LF', label: 'Services - Leisure Facilities'},
  {value: 'SV-ME', label: 'Services - Media & Entertainment'},
  {value: 'SV-PS', label: 'Services - Profesional & Commercial Services'},
]

const Company3: FC<IProps> = (props: IProps) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What is the primary sector in which {props.assumed_name} operates, as defined by the{' '}
          <Link
            to='#'
            className='link-primary fw-bolder btn btn-flush'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            onClick={() => props.openModal('primary_industry')}
          >
            Primary Industry
          </Link>
          ?
        </label>

        <Field name='primary_industry' component={CustomDropDown} options={indOptions} />

        <div className='text-danger mt-2'>
          <ErrorMessage name='primary_industry' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Does {props.assumed_name} operate in more industries? If so, which ones?{' '}
          <b>
            <i>(optional)</i>
          </b>
        </label>

        <Field
          name='secondary_industry'
          component={CustomDropDown}
          options={indOptions}
          isMulti={true}
        />

        <div className='text-danger mt-2'>
          <ErrorMessage name='secondary_industry' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          What are {props.assumed_name}'s primary products or services?
        </label>
        <Field
          as='textarea'
          className='form-control form-control form-control-solid'
          name='primary_products'
          placeholder='Primary Products'
          label='Primary Products'
        ></Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='primary_products' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          How many full-time employees work at {props.assumed_name}?
        </label>
        <Field
          type='text'
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
        <Field
          type='text'
          name='primary_address'
          className='form-control form-control-lg form-control-solid'
          placeholder='Primary Address'
          label='Primary Address'
        ></Field>
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
export {Company3}
