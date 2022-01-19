interface TouchedModel {
    firstname: boolean
    lastname: boolean,
    email: boolean,
    password: boolean,
    changepassword: boolean,
    acceptTerms: boolean,
}

interface ErrorsModel {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    changepassword: string,
    acceptTerms: boolean,
}

interface FormikModel {
    getFieldProps: (arg: string) => void;
}

export interface InputFieldModel {
    title?: string,
    formikTitle?: string,
    formikErrors?: string,
    autoComplete: string,
    formik: FormikModel,
    formikTouched?: boolean
}