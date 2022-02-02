export interface FundModel {
  _id: string | null
  user: string | null
  assumed_name: string
  legal_name: string
  legal_formation: string
  description: string
  mission_statement: string
  website: string
  sics_codes: string
  number_employees: string
  primary_address: string
  other_addresses: string
  operating_countries: string
  operating_currencies: string
  fund_type: string
  fund_number: string
}
