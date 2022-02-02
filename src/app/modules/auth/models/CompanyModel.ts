export interface CompanyModel {
  _id: string | null
  user: string | null
  assumed_name: string
  legal_name: string
  legal_formation: string
  description: string
  mission_statement: string
  company_website: string
  sics_codes: string
  primary_products: string
  number_employees: string
  primary_address: string
  other_addresses: string
  operating_countries: string
  operating_currencies: string
  ttm_revenue: string
  ttm_revenue_currency: string
  net_positive: string
}
