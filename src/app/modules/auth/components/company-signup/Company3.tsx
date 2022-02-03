import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Company3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Operations</h2>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          What is the primary sector in which (Assumed Name) operates, as defined by the <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          Sustainable Industry
          Classification System®</a>?
          {/* <i className='fas fa-exclamation-circle ms-2 fs-7' data-bs-toggle='tooltip'></i> */}
        </label>
        <Field
          as='select'
          className='form-control form-control form-control-solid mb-5'
          name='sics_codes'
          placeholder='SICS Codes'
          label='SICS Codes'
        >
          <option value=''>Select a Primary SICS sector...</option>
          <option value="HC-MS">Healthcare - Medical Equipment & Supplies</option>
          <option value="HC-BP">Healthcare - Biotechnology & Pharmaceuticals</option>
          <option value="HC-DI">Healthcare - Distributors</option>
          <option value="HC-DY">Healthcare - Healthcare Delivery</option>
          <option value="HC-MC">Healthcare - Managed Care</option>
          <option value="HC-DR">Healthcare - Drug Retailers</option>

          <option value="CG-AA">Consumer Goods - Apparel, Accessories & Footwear</option>
          <option value="CG-AM">Consumer Goods - Appliance Manufacturing</option>
          <option value="CG-BF">Consumer Goods - Building Products & Furnishings</option>
          <option value="CG-HP">Consumer Goods - Household & Personal Products</option>
          <option value="CG-TS">Consumer Goods - Toys & Sporting Goods</option>
          <option value="CG-MR">Consumer Goods - Multiline & Specialty Retailers & Distributors</option>
          <option value="CG-EC">Consumer Goods - E-commerce</option>

          <option value="TC-ES">Technology & Communications - Electronic Manufacturing Services & Original Design Manufacturing</option>
          <option value="TC-HW">Technology & Communications - Hardware</option>
          <option value="TC-IM">Technology & Communications - Internet Media & Services</option>
          <option value="TC-SC">Technology & Communications - Semiconductors</option>
          <option value="TC-SI">Technology & Communications - Software & IT Services</option>
          <option value="TC-TL">Technology & Communications - Telecommuncations Services</option>

          <option value="FB-AG">Food & Beverage - Agricultural Products</option>
          <option value="FB-AB">Food & Beverage - Alcoholic Beverages</option>
          <option value="FB-FR">Food & Beverage - Food Retailers & Distributors</option>
          <option value="FB-MP">Food & Beverage - Meat, Poultry & Dairy</option>
          <option value="FB-NB">Food & Beverage - Non-Alcoholic Beverages</option>
          <option value="FB-PF">Food & Beverage - Processed Foods</option>
          <option value="FB-RN">Food & Beverage - Restaurants</option>
          <option value="FB-TB">Food & Beverage - Tobacco</option>

          <option value="FN-AC">Financials - Asset Management & Custody Activities</option>
          <option value="FN-CB">Financials - Commercial Banks</option>
          <option value="FN-CF">Financials - Consumer Finance</option>
          <option value="FN-IN">Financials - Insurance</option>
          <option value="FN-IB">Financials - Investment Banking & Brokerage</option>
          <option value="FN-MF">Financials - Mortgage Finance</option>
          <option value="FN-EX">Financials - Security & Commodity Exchanges</option>

          <option value="IF-EU">Infrastructure - Electric Utilities & Power Generators</option>
          <option value="IF-EN">Infrastructure - Engineering & Construction Services</option>
          <option value="IF-GU">Infrastructure - Gas Utilities & Distributors</option>
          <option value="IF-HB">Infrastructure - Home Builders</option>
          <option value="IF-RE">Infrastructure - Real Estate</option>
          <option value="IF-RS">Infrastructure - Real Estate Services</option>
          <option value="IF-WM">Infrastructure - Waste Management</option>
          <option value="IF-WU">Infrastructure - Water Utilities & Services</option>

          <option value="SV-AD">Services - Advertising & Marketing</option>
          <option value="SV-CA">Services - Casinos & Gaming</option>
          <option value="SV-ED">Services - Education</option>
          <option value="SV-HL">Services - Hotels & Lodging</option>
          <option value="SV-LF">Services - Leisure Facilities</option>
          <option value="SV-ME">Services - Media & Entertainment</option>
          <option value="SV-PS">Services - Profesional & Commercial Services</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='sics_codes' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>
          Does (Assumed Name) operate in more industries? If so, which ones? <b><i>(optional)</i></b>
          {/* <i className='fas fa-exclamation-circle ms-2 fs-7' data-bs-toggle='tooltip'></i> */}
        </label>
        <Field
          as='select'
          className='form-control form-control form-control-solid mb-5'
          name='secondary_industry'
          placeholder='SICS Codes'
          label='SICS Codes'
        >
          <option value=''>Select a Secondary SICS sector...</option>
          <option value="HC-MS">Healthcare - Medical Equipment & Supplies</option>
          <option value="HC-BP">Healthcare - Biotechnology & Pharmaceuticals</option>
          <option value="HC-DI">Healthcare - Distributors</option>
          <option value="HC-DY">Healthcare - Healthcare Delivery</option>
          <option value="HC-MC">Healthcare - Managed Care</option>
          <option value="HC-DR">Healthcare - Drug Retailers</option>

          <option value="CG-AA">Consumer Goods - Apparel, Accessories & Footwear</option>
          <option value="CG-AM">Consumer Goods - Appliance Manufacturing</option>
          <option value="CG-BF">Consumer Goods - Building Products & Furnishings</option>
          <option value="CG-HP">Consumer Goods - Household & Personal Products</option>
          <option value="CG-TS">Consumer Goods - Toys & Sporting Goods</option>
          <option value="CG-MR">Consumer Goods - Multiline & Specialty Retailers & Distributors</option>
          <option value="CG-EC">Consumer Goods - E-commerce</option>

          <option value="TC-ES">Technology & Communications - Electronic Manufacturing Services & Original Design Manufacturing</option>
          <option value="TC-HW">Technology & Communications - Hardware</option>
          <option value="TC-IM">Technology & Communications - Internet Media & Services</option>
          <option value="TC-SC">Technology & Communications - Semiconductors</option>
          <option value="TC-SI">Technology & Communications - Software & IT Services</option>
          <option value="TC-TL">Technology & Communications - Telecommuncations Services</option>

          <option value="FB-AG">Food & Beverage - Agricultural Products</option>
          <option value="FB-AB">Food & Beverage - Alcoholic Beverages</option>
          <option value="FB-FR">Food & Beverage - Food Retailers & Distributors</option>
          <option value="FB-MP">Food & Beverage - Meat, Poultry & Dairy</option>
          <option value="FB-NB">Food & Beverage - Non-Alcoholic Beverages</option>
          <option value="FB-PF">Food & Beverage - Processed Foods</option>
          <option value="FB-RN">Food & Beverage - Restaurants</option>
          <option value="FB-TB">Food & Beverage - Tobacco</option>

          <option value="FN-AC">Financials - Asset Management & Custody Activities</option>
          <option value="FN-CB">Financials - Commercial Banks</option>
          <option value="FN-CF">Financials - Consumer Finance</option>
          <option value="FN-IN">Financials - Insurance</option>
          <option value="FN-IB">Financials - Investment Banking & Brokerage</option>
          <option value="FN-MF">Financials - Mortgage Finance</option>
          <option value="FN-EX">Financials - Security & Commodity Exchanges</option>

          <option value="IF-EU">Infrastructure - Electric Utilities & Power Generators</option>
          <option value="IF-EN">Infrastructure - Engineering & Construction Services</option>
          <option value="IF-GU">Infrastructure - Gas Utilities & Distributors</option>
          <option value="IF-HB">Infrastructure - Home Builders</option>
          <option value="IF-RE">Infrastructure - Real Estate</option>
          <option value="IF-RS">Infrastructure - Real Estate Services</option>
          <option value="IF-WM">Infrastructure - Waste Management</option>
          <option value="IF-WU">Infrastructure - Water Utilities & Services</option>

          <option value="SV-AD">Services - Advertising & Marketing</option>
          <option value="SV-CA">Services - Casinos & Gaming</option>
          <option value="SV-ED">Services - Education</option>
          <option value="SV-HL">Services - Hotels & Lodging</option>
          <option value="SV-LF">Services - Leisure Facilities</option>
          <option value="SV-ME">Services - Media & Entertainment</option>
          <option value="SV-PS">Services - Profesional & Commercial Services</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='secondary_industry' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>What are (Assumed Name)'s primary products or services?</label>
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
        <label className='form-label'>How many full-time employees work at (Assumed Name)?</label>
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
          What is the address of the (Assumed Name)'s headquarters?
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
          What are the addresses of (Assumed Name)'s additional locations?
        </label>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid mb-5'
          name='other_addresses'
          placeholder='Other Addresses'
          label='Other Addresses'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='other_addresses' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label mb-3'>What are (Assumed Name)'s <a className='link-primary fw-bolder btn btn-flush' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
          operating countries</a>?</label>
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
