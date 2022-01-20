import React, {FC} from "react";
import {Link} from 'react-router-dom';
import { CancelButtonModel } from './models/CancelButtonModel';

const CancelButton: FC<CancelButtonModel> = ({id, linkPath, text, className, disable}) => {
    return (
        <Link to={linkPath}>
          <button
            type='button'
            id={id}
            className={className}
            disabled={disable ? disable : false}
          >
            {text}
          </button>
        </Link>
    )
}
export default CancelButton;