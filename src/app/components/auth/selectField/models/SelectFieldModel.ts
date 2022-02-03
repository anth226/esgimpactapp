interface FormikModel {
    getFieldProps: (arg: string) => void;
}

export interface SelectFieldModel {
    title?: string,
    formikTitle?: string,
    formikErrors?: string,
    formik: FormikModel,
    formikTouched?: boolean,
    className?: string,
}