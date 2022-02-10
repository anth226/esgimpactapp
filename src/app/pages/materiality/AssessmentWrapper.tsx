/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { Stakeholders } from './components/Stakeholders'
import { AssessmentHeader } from './AssessmentHeader'
import { Matrix } from './components/Matrix' 
const AssessmentWrapper: FC = () => {
    return (
      <>
        <AssessmentHeader />
        <Stakeholders />
        <div className="card">
          <div className="card-body p-10 p-lg-15">
            <Matrix />
          </div>
        </div>
      </>
    )
}
export {AssessmentWrapper}