import React, {FC} from "react";
import { SubmitButtonModel } from './models/SubmitButtonModel';

const SubmitButton: FC<SubmitButtonModel> = ({isSubmitting, isValid, acceptTerms, loading, id, text, className}) => {
    return (
        <button
          type='submit'
          id={id}
          className={className}
          disabled={isSubmitting && isValid ? isSubmitting|| !isValid || acceptTerms && !acceptTerms : false}
        >
          {!loading && <span className='indicator-label'>{text}</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
    )
}

export default SubmitButton;