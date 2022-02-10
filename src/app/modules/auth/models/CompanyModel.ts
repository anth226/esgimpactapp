export interface CompanyModel {
  _id: string | null
  user: string | null
  assumed_name: string
  legal_name: string
  legal_formation: string
  description: string
  mission_statement: string
  company_website: string
  primary_industry: string
  secondary_industry: Array<string>
  primary_products: string
  number_employees: number
  primary_address: string
  other_addresses: Array<string>
  operating_countries: string
  operating_currencies: Array<string>
  ttm_revenue: number
  ttm_revenue_currency: string
  net_positive: string
  acceptTerms: boolean | null
}
