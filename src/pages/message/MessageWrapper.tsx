/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Dropdown1, ChatInner} from '../../_metronic/partials'
import {PageTitle} from '../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../_metronic/helpers'
import {useIntl} from 'react-intl'
import {StatisticsWidget2} from '../../_metronic/partials/widgets'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const MessageWrapper: FC = () => {
  const intl = useIntl()

  return (
  <>
    <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Messages'})}</PageTitle>

    <div className='d-flex flex-column flex-lg-row'>

      <div className='flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0'>

        <div className='card card-custom'>
          <div className='card-header'>
            <div className='card-title'>
              <a href='#' className='fw-bolder text-gray-900 text-hover-primary center'>
                About Your Analyst
              </a>
            </div>
            <div className="card-toolbar">
              <button type="button" className="btn btn-sm btn-light">
                  Schedule
              </button>
            </div>
          </div>

          <div className='card-body d-flex flex-center flex-column'>
            <div className='symbol symbol-75px symbol-lg-100px symbol-circle symbol-fixed position-relative mb-5'>
              <img src={toAbsoluteUrl('/media/avatars/150-7.jpg')} alt='profile pic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
            <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0">Mona Lisa</a>
            <div className="fw-bold text-gray-400 mb-0">ESG Analyst</div>
          </div>

          <div className="card-footer">

            <div className="mb-5">
              <b>Email:</b>
              <p className="mt-3">
                <button type='button' className='btn btn-sm btn-light'>
                MonaLisa@esgi.io
                </button>
              </p>
            </div>

            <p className="mb-5">
              <b>Phone:</b>
              <p className="mt-3">
                <button type='button' className='btn btn-sm btn-light'>
                283-912-4921
                </button>
              </p>
            </p>

            <p className="mb-0">
              <b>Active Times:</b>
              <p className="mt-5">Monday - Thursday</p>
              <p>8:00 AM - 5:00 PM Central Time (CST)</p>
              <p>Friday</p>
              <p>7:00 AM - 1:00 PM Central Time (CST)</p>
            </p>

          </div>
        </div>
      </div>

      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card' id='kt_chat_messenger'>
          <div className='card-header' id='kt_chat_messenger_header'>
            <div className='card-title'>
              <div className='symbol-group symbol-hover'></div>
              <div className='d-flex justify-content-center flex-column me-3'>
                <a
                  href='#'
                  className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'
                >
                  Mona Lisa
                </a>

                <div className='mb-0 lh-1'>
                  <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
                  <span className='fs-7 fw-bold text-gray-400'>Active</span>
                </div>
              </div>
            </div>

            <div className='card-toolbar'>
              <div className='me-n3'>
                <button
                  className='btn btn-sm btn-icon btn-active-light-primary'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                >
                  <i className='bi bi-three-dots fs-2'></i>
                </button>
                <Dropdown1 />
              </div>
            </div>
          </div>
          <ChatInner />
        </div>
      </div>
    </div>
  </>
  )
}

export {MessageWrapper}
