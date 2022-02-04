import React, {FC} from 'react'
import {InformatioModal} from './InformationModal'
import {KTSVG} from '../../../../../_metronic/helpers'

const ModalInformation: FC<InformatioModal> = ({title, type, body, isModalOpen, setModal}) => {
  return (
    <div
      className={`modal fade ${isModalOpen.isOpen && isModalOpen.modaltype == type ? 'show' : ''}`}
      tabIndex={-1}
      id='kt_modal_1'
      style={{
        display: `${isModalOpen.isOpen && isModalOpen.modaltype == type ? 'block' : 'none'}`,
        overflowY: 'auto',
      }}
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setModal(isModalOpen, type)}
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>
          <div className='modal-body'>
            <p>{body}</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-light'
              data-bs-dismiss='modal'
              onClick={() => setModal(isModalOpen, type)}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => setModal(isModalOpen, type)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInformation
