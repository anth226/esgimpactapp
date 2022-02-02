interface ProfileModel {
  first_name: string
  last_name: string
  position: string
  type: string
  domain: string
  picture: string
}

export interface UserModel {
  _id: string
  email: string
  role: string
  verified: boolean
  profile: ProfileModel
}
