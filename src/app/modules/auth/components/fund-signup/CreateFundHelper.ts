import * as Yup from 'yup'
import {FundModel} from '../../models/FundModel'

const createFundSchemas = [
  Yup.object({
    acceptTerms: Yup.bool().oneOf([true], 'You should agree with the terms to continue').nullable(),
  }),
  Yup.object({
    assumed_name: Yup.string().required().label('Assumed Name'),
    legal_name: Yup.string().required().label('Legal Name'),
    legal_formation: Yup.string().required().label('Legal Formation'),
    description: Yup.string().required().label('Business Description'),
    mission_statement: Yup.string().required().label('Mission Statement'),
    website: Yup.string().required().label('Website'),
  }),
  Yup.object({
    primary_industry: Yup.string().required().label('Primary Industry'),
    number_employees: Yup.string().required().label('Number of Employees'),
    primary_address: Yup.string().required().label('Primary Address'),
    other_addresses: Yup.string().required().label('Other Addresses'),
    operating_countries: Yup.string().required().label('Operating Countries'),
  }),
  Yup.object({
    operating_currencies: Yup.string().required().label('Operating Currencies'),
    fund_type: Yup.string().required().label('Fund Type'),
    fund_number: Yup.string().required().label('Fund Number'),
  }),
]

const inits: FundModel = {
  _id: null,
  user: null,
  acceptTerms: false,
  assumed_name: '',
  legal_name: '',
  legal_formation: '',
  description: '',
  mission_statement: '',
  website: '',
  primary_industry: 'FN-AC',
  number_employees: '',
  primary_address: '',
  other_addresses: '',
  operating_countries: '',
  operating_currencies: '',
  fund_type: '',
  fund_number: ''
}

export {createFundSchemas, inits}