import * as Yup from 'yup'
import {CompanyModel} from '../../models/CompanyModel'

const createCompanySchemas = [
  Yup.object({
    acceptTerms: Yup.bool().oneOf([true], 'You should agree with the terms to continue').nullable(),
  }),
  Yup.object({
    assumed_name: Yup.string().required().label('Assumed Name'),
    legal_name: Yup.string().required().label('Legal Name'),
    legal_formation: Yup.string().required().label('Legal Formation'),
    description: Yup.string().required().label('Business Description'),
    mission_statement: Yup.string().required().label('Mission Statement'),
    company_website: Yup.string().required().label('Company Website'),
  }),
  Yup.object({
    primary_industry: Yup.string().required().label('SICS Codes'),
    primary_products: Yup.string().required().label('Primary Products'),
    number_employees: Yup.number().required().label('Number of Employees'),
    primary_address: Yup.string().required().label('Primary Address'),
    operating_countries: Yup.string().required().label('Operating Countries'),
  }),
  Yup.object({
    operating_currencies: Yup.array().required().label('Operating Currencies'),
    ttm_revenue: Yup.number().required().label('TTM Revenue'),
    ttm_revenue_currency: Yup.string().required().label('TTM Revenue Currency'),
    net_positive: Yup.string().required().label('Net Positive'),
  }),
  // Yup.object({
  //   // nameOnCard: Yup.string().required().label('Name On Card'),
  //   // cardNumber: Yup.string().required().label('Card Number'),
  //   // cardExpiryMonth: Yup.string().required().label('Expiration Month'),
  //   // cardExpiryYear: Yup.string().required().label('Expiration Year'),
  //   // cardCvv: Yup.string().required().label('CVV'),
  // }),
]

const inits: CompanyModel = {
  _id: null,
  user: null,
  acceptTerms: false,
  assumed_name: '',
  legal_name: '',
  legal_formation: '',
  description: '',
  mission_statement: '',
  company_website: '',
  primary_industry: '',
  secondary_industry: [],
  primary_products: '',
  number_employees: 0,
  primary_address: '',
  other_addresses: [],
  operating_countries: '',
  operating_currencies: [],
  ttm_revenue: 0,
  ttm_revenue_currency: '',
  net_positive: '',
}

export {createCompanySchemas, inits}
