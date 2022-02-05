/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Company1} from './Company1'
import {Company2} from './Company2'
import {Company3} from './Company3'
import {Company4} from './Company4'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createCompanySchemas, inits} from './CreateCompanyHelper'
import {createCompany} from '../../redux/AuthCRUD'
import {CompanyModel} from '../../models/CompanyModel'
import {useHistory} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../../../../../setup'
import InformatioModal from './ModalInformation'

const CompanySignupPage: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createCompanySchemas[0])
  const [initValues] = useState<CompanyModel>(inits)
  const history = useHistory()
  const [errMessage, setErrMessage] = useState('')
  const user_id: string = useSelector<RootState>(({auth}) => auth._id, shallowEqual) as string
  const [modalName, setModalName] = useState('')
  const [assumedName, setAssumedName] = useState('')

  const openModal = (name: string) => {
    setModalName(name)
  }

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
    setCurrentSchema(createCompanySchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: CompanyModel, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    console.log("vales", values)
    setAssumedName(values.assumed_name)
    setCurrentSchema(createCompanySchemas[stepper.current.currentStepIndex])
    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      values.user = user_id
      if (!user_id) {
        setErrMessage('You should register before company setup!')
        return
      }
      createCompany(values)
        .then(({data: {message, company}}) => {
          history.push('/auth/login')
        })
        .catch(() => {
          setErrMessage('Company register has been failed')
        })
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])

  return (
    <>
      <div className='alert alert-dismissible bg-light-dark d-flex flex-column flex-sm-row p-5 mb-10'>
        <span className='svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'>
          <KTSVG
            path='/media/icons/duotune/general/gen026.svg'
            className='svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'
          />
        </span>

        <div className='d-flex flex-column text pe-0 pe-sm-10'>
          <h5 className='mb-3'>Welcome to Company Signup!</h5>
          <span>
            Hello, thank you for joining ESG Impact. Our goal is to help companies find a prudent
            balance between impact and profit. If you have any questions setting up your company
            profile, feel free to contact us at:
            <a href='mailto: contact@esgi.io'> contact@esgi.io</a>
          </span>
        </div>

        <button
          type='button'
          className='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
          data-bs-dismiss='alert'
        >
          <span className='svg-icon svg-icon-1 svg-icon-primary'>
            <KTSVG
              path='/media/icons/duotune/arrows/arr011.svg'
              className='svg-icon-primary svg-icon-1hx'
            />
          </span>
        </button>
      </div>

      <div
        ref={stepperRef}
        className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
        id='kt_create_account_stepper'
      >
        <div className='d-flex justify-content-center bg-white rounded justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
          <div className='px-6 px-lg-10 px-xxl-15 py-20'>
            <div className='stepper-nav'>
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Terms & Conditions</h3>

                  {/* <div className='stepper-desc fw-bold'></div> */}
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Information</h3>
                  <div className='stepper-desc fw-bold'>Basic Company Information</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Operations</h3>
                  <div className='stepper-desc fw-bold'>Your Company Operations</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Finances</h3>
                  <div className='stepper-desc fw-bold'>Your Company Finances</div>
                </div>
              </div>

              {/* <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>5</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Payment Details</h3>
                  <div className='stepper-desc fw-bold'>Set Your Payment Method</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className='d-flex flex-row-fluid flex-center bg-white rounded'>
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <Company1 />
                </div>
                <div data-kt-stepper-element='content'>
                  <Company2 openModal={openModal} />
                </div>
                <div data-kt-stepper-element='content'>
                  <Company3 openModal={openModal} assumed_name={assumedName} />
                </div>
                <div data-kt-stepper-element='content'>
                  <Company4 openModal={openModal} assumed_name={assumedName} />
                </div>

                {errMessage && <p className='text-danger'>{errMessage}</p>}
                <div className='d-flex flex-stack pt-10'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {stepper.current?.currentStepIndex !== stepper.current?.totatStepsNumber &&
                          'Continue'}
                        {stepper.current?.currentStepIndex === stepper.current?.totatStepsNumber &&
                          'Submit'}
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <InformatioModal name={modalName} />
      </div>
    </>
  )
}

export {CompanySignupPage}

const CompanySignupWrapper: FC = () => {
  return (
    <div className='w-lg-1000px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <CompanySignupPage />
    </div>
  )
}

export {CompanySignupWrapper}
