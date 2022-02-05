import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

const ModalData = [
  {
    name: 'assumed-name',
    title: 'Here goes the Assumed title...',
    body: 'Here goes the Assumed body...',
  },
  {
    name: 'legal-name',
    title: 'Here goes the legal name title...',
    body: 'Here goes the legal name body...',
  },
  {
    name: 'legal-information',
    title: 'Here goes the legal information...',
    body: 'Here goes the legal information body...',
  },
  {
    name: 'mission-statement',
    title: 'Here goes the Legal Mission statement title...',
    body: 'Here goes the Legal mission  body...',
  },
  {
    name: 'information-example',
    title: 'Here goes the Legal information example title...',
    body: 'Here goes the information example body...',
  },
  {
    name: 'primary_industry',
    title: 'Here goes the Primary Industry title...',
    body: 'Here goes the Primary Industry body...',
  },
  {
    name: 'operating-countries',
    title: 'Here goes the operating countries title...',
    body: 'Here goes the operating countries body...',
  },
  {
    name: 'operating-currencies',
    title: 'Here goes the operating currencies title...',
    body: 'Here goes the operating currencies body...',
  },
  {
    name: 'ttm-revenue',
    title: 'Here goes the Trailing Twelve Month revenue title...',
    body: 'Here goes the Trailing Twelve Month revenue body...',
  },
  {
    name: 'net-positive',
    title: 'Here goes the net positive title...',
    body: 'Here goes the net positive body...',
  },
]

export interface ModalProps {
  name: string
}

const ModalInformation: FC<ModalProps> = (props: ModalProps) => {
  const flts = ModalData.filter((item) => item.name === props.name)
  return (
    <div className='modal fade' tabIndex={-1} id='kt_modal_1' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{flts.length === 0 ? '' : flts[0].title}</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>
          <div className='modal-body'>
            <p>{flts.length === 0 ? '' : flts[0].body}</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInformation
