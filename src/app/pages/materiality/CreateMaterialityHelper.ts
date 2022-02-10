import * as Yup from 'yup'

export interface ICreateMateriality {
  stakeholders: string
  matrix: string
  nextsteps: string
}

const createMaterialitySchemas = [
  Yup.object({
    stakeholders: Yup.string().required().label('Stakeholders'),
  }),
  Yup.object({
    matrix: Yup.string().required().label('Matrix'),
  }),
  Yup.object({
    businessName: Yup.string().required().label('Next Steps'),
  }),
]

const inits: ICreateMateriality = {
  stakeholders: '',
  matrix: '',
  nextsteps: '',
  
}

export {createMaterialitySchemas, inits}
