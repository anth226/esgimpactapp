interface FormikModel {
    getFieldProps: (arg: string) => void;
}

export interface InputFieldModel {
    title?: string,
    formikTitle?: string,
    formikErrors?: string,
    autoComplete: string,
    formik: FormikModel,
    formikTouched?: boolean,
    type: string,
    lablePath?: string,
    className?: string,
}