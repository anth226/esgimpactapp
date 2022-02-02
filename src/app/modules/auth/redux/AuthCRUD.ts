import axios from 'axios'
import {UserModel} from '../models/UserModel'
import {CompanyModel} from '../models/CompanyModel'
import {FundModel} from '../models/FundModel'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/protected`
export const LOGIN_URL = `${API_URL}/auth/login`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`
export const VERIFY_USER_URL = `${API_URL}/auth/verify`
export const CREATE_COMPANY_URL = `${API_URL}/company/create`
export const CREATE_FUND_URL = `${API_URL}/fund/create`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  first_name: string,
  last_name: string,
  password: string,
  position: string,
  type: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: first_name,
    last_name: last_name,
    password,
    position,
    type,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.get<{user: UserModel}>(GET_USER_BY_ACCESSTOKEN_URL)
}

export function verifyUser(token: string) {
  return axios.post<{message: string; user: UserModel}>(VERIFY_USER_URL, {
    token,
  })
}

export function createCompany(company: CompanyModel) {
  return axios.post<{message: string; company: CompanyModel}>(CREATE_COMPANY_URL, company)
}

export function createFund(fund: FundModel) {
  return axios.post<{message: string; fund: FundModel}>(CREATE_FUND_URL, fund)
}
