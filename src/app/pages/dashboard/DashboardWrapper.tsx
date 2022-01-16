/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const DashboardPage: FC = () => (

  <>
  <div className='card mb-5 mb-xl-10'>
    <div className='card-body pt-9 pb-0'>
      <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
        <div className='me-7 mb-4'>
          <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
            <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='profile pic' />
            <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
          </div>
        </div>

        <div className='flex-grow-1'>
          <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
            <div className='d-flex flex-column'>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                  Jace Partners LLC
                </a>
                <a href='#'>
                  <KTSVG
                    path='/media/icons/duotune/general/gen026.svg'
                    className='svg-icon-1 svg-icon-primary'
                  />
                </a>
              </div>

              <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                <a
                  href='#'
                  className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                >
                  <KTSVG
                    path='/media/icons/duotune/communication/com006.svg'
                    className='svg-icon-4 me-1'
                  />
                  Adam Jace
                </a>
                <a
                  href='#'
                  className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                >
                  <KTSVG
                    path='/media/icons/duotune/general/gen018.svg'
                    className='svg-icon-4 me-1'
                  />
                  Nashville, Tennessee
                </a>
                <a
                  href='#'
                  className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                >
                  <KTSVG
                    path='/media/icons/duotune/communication/com011.svg'
                    className='svg-icon-4 me-1'
                  />
                  adamjace@esgi.io
                </a>
              </div>
            </div>

            <div className='d-flex my-4'>
              <a href='#' className='btn btn-sm btn-secondary me-2'>
                <KTSVG
                  path='/media/icons/duotune/arrows/arr012.svg'
                  className='svg-icon-3 d-none'
                />

                <span className='indicator-label'>Download Overview</span>
                <span className='indicator-progress'>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              </a>

            </div>
          </div>

          <div className='d-flex flex-wrap flex-stack'>
            <div className='d-flex flex-column flex-grow-1 pe-8'>
              <div className='d-flex flex-wrap'>
                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                  <div className='d-flex align-items-center'>
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr066.svg'
                      className='svg-icon-3 svg-icon-success me-2'
                    />
                    <div className='fs-2 fw-bolder'>87</div>
                  </div>

                  <div className='fw-bold fs-6 text-gray-400'>Impact Rating</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                  <div className='d-flex align-items-center'>
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr065.svg'
                      className='svg-icon-3 svg-icon-danger me-2'
                    />
                    <div className='fs-2 fw-bolder'>2</div>
                  </div>

                  <div className='fw-bold fs-6 text-gray-400'>Overdue Projects</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                  <div className='d-flex align-items-center'>
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr066.svg'
                      className='svg-icon-3 svg-icon-success me-2'
                    />
                    <div className='fs-2 fw-bolder'>12</div>
                  </div>

                  <div className='fw-bold fs-6 text-gray-400'>Completed Projects</div>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
              <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                <span className='fw-bold fs-6 text-gray-400'>Days Since Last Impact Rating</span>
                <span className='fw-bolder fs-6'>153</span>
              </div>
              <div className='h-5px mx-3 w-100 bg-light mb-3'>
                <div
                  className='bg-success rounded h-5px'
                  role='progressbar'
                  style={{width: '50%'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex overflow-auto h-55px'>
        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
          <li className='nav-item'>
            <Link
              className={
                `nav-link text-active-primary me-6 ` +
                (useLocation().pathname === '/dashboard' && 'active')
              }
              to='#'
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={
                `nav-link text-active-primary me-6 ` +
                (useLocation().pathname === '/crafted/account/settings' && 'active')
              }
              to='#'
            >
              Calendar
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={
                `nav-link text-active-primary me-6 ` +
                (useLocation().pathname === '/crafted/account/settings' && 'active')
              }
              to='#'
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <div className='d-flex flex-wrap flex-stack mb-6'>
    <h3 className='fw-bolder my-2'>
      Projects
      <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
    </h3>

    <div className='d-flex flex-wrap my-2'>
      <div className='me-4'>
        <select
          name='status'
          data-control='select2'
          data-hide-search='true'
          className='form-select form-select-sm form-select-white w-125px'
          defaultValue='All'
        >
          <option value='Declined'>All</option>
          <option value='Active'>Active</option>
          <option value='Approved'>In Progress</option>
          <option value='In Progress'>Completed</option>
        </select>
      </div>
      <a
         href='#'
         className='btn btn-secondary btn-sm'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_project'
      >
        Add Project
      </a>
    </div>
  </div>

  <div className='row g-6 g-xl-9'>
    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/plurk.svg'
        badgeColor='primary'
        status='In Progress'
        statusColor='primary'
        title='Diversity & Inclusion Policy'
        description='Internal Policy'
        date='March 10, 2022'
        time='35 minutes'
        progress={50}
        //users={users1}
      />
    </div>

    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/disqus.svg'
        badgeColor='primary'
        status='In Progress'
        statusColor='primary'
        title='Data 2: Compliance'
        description='Module'
        date='January 10, 2022'
        time='60 minutes'
        progress={30}
        //users={users2}
      />
    </div>

    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/figma-1.svg'
        badgeColor='success'
        status='Completed'
        statusColor='success'
        title='Net Neutrality'
        description='Article'
        date='Mar 14, 2021'
        time='10 minutes'
        progress={100}
        //users={users3}
      />
    </div>

    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/sentry-3.svg'
        badgeColor='success'
        status='Completed'
        statusColor='success'
        title='Understanding Net Zero'
        description='Module'
        date='Mar 14, 2021'
        time='35 minutes'
        progress={100}
        //users={users4}
      />
    </div>

    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/xing-icon.svg'
        badgeColor='success'
        status='Completed'
        statusColor='success'
        title='Privacy Policy'
        description='External Policy'
        date='Mar 14, 2021'
        time='15 minutes'
        progress={100}
        //users={users5}
      />
    </div>

    <div className='col-md-6 col-xl-4'>
      <Card2
        icon='/media/svg/brand-logos/tvit.svg'
        badgeColor='danger'
        status='Overdue'
        statusColor='danger'
        title='Vetting Supply Chain'
        description='Module'
        date='Mar 14, 2021'
        time='60 minutes'
        progress={100}
        //users={users6}
      />
    </div>

  </div>

  <div className='d-flex flex-stack flex-wrap pt-10'>
    <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 6 of 12 entries</div>

    <ul className='pagination'>
      <li className='page-item previous'>
        <a href='#' className='page-link'>
          <i className='previous'></i>
        </a>
      </li>

      <li className='page-item active'>
        <a href='#' className='page-link'>
          1
        </a>
      </li>

      <li className='page-item'>
        <a href='#' className='page-link'>
          2
        </a>
      </li>

      <li className='page-item next'>
        <a href='#' className='page-link'>
          <i className='next'></i>
        </a>
      </li>
    </ul>
  </div>

  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
