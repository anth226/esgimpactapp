/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Stakeholders: FC = () => {
    return (
        <>
        <div className="card mb-10">
            <div className="card-body p-10 p-lg-15">
                <div className="mb-15">
                    <h4 className="fs-2x text-gray-800 w-bolder mb-6">Identify Stakeholders</h4>
                    <p className="fw-bold fs-5 text-gray-600 mb-2">
                        Stakeholder: an entity or individual that can reasonably be expected to be significantly affected by the reporting organization's activities, products and services, or whose actions can reasonably be expected to affect the ability of the organization to successfully implement its strategies and achieve its objectives.
                    <strong className="fw-bold fs5 text-primary mb-2"> GRI 101</strong>
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 pe-md-10 mb-10 mb-md-0">
                        <h2 className="text-gray-800 fw-bolder mb-4">Internal Stakeholders</h2>               
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_1">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Employees</h4>
                            </div>
                            <div id="kt_job_4_1" className="collapse show fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Individuals who are in an employment relationship with the organization, according to national law or its application.
                                <strong className='mb-4 text-primary fw-bold'> GRI 101</strong>
                                </div>
                                {/* <div className='mb-4 text-primary fw-bold fs-6 ps-10'>
                                    GRI 101
                                </div> */}

                                <div className='mb-4 text-primary fw-bold fs-6 ps-10'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter employee group"
                                    />
                                </div>

                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_6">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Shareholders</h4>
                            </div>
                            <div id="kt_job_4_6" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Individuals who are in an employment relationship with the organization, according to national law or its application.
                                </div>
                                <div className='mb-4 text-primary fw-bold fs-6 ps-10'>
                                    GRI 101
                                </div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_2">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Governance Body</h4>
                            </div>
                            <div id="kt_job_4_2" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Committee or board responsible for the strategic guidance of the organization, the effective 
                                    monitoring of management, and the accountability of management to the broader organization 
                                    and its stakeholders.
                                </div>
                                <div className='mb-4 text-primary fw-bold fs-6 ps-10'>
                                    GRI 101
                                </div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_3">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Advisors</h4>
                            </div>
                            <div id="kt_job_4_3" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Advisors definition here.
                                </div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_4">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Volunteers</h4>
                            </div>
                            <div id="kt_job_4_4" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Volunteer definition here.
                                </div>      
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_5">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Families</h4>
                            </div>
                            <div id="kt_job_4_5" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    Connected families definition here.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ps-md-10">
                        <h2 className="text-gray-800 fw-bolder mb-4">External Stakeholders</h2>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_1">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Customers</h4>
                            </div>
                            <div id="kt_job_5_1" className="collapse show fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <strong className='mb-4 text-primary fw-bold'> GRI 101
                                    </strong>
                                </div>
                                <div className='mb-4 text-primary fw-bold fs-6 ps-10'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter customer group"
                                    />
                                </div>
                            </div>
                           
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_2">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Local Communities</h4>
                            </div>
                            <div id="kt_job_5_2" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
                            </div>
                            
                            <div className="separator separator-dashed">

                            </div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_3">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Key Suppliers</h4>
                            </div>
                            <div id="kt_job_5_3" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_4">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Government</h4>
                            </div>
                            <div id="kt_job_5_4" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_6">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">NGOs</h4>
                            </div>
                            <div id="kt_job_5_6" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
                            </div>
                            <div className="separator separator-dashed"></div>
                        </div>
                        <div className="m-0">
                            <div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_5">
                                <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                    <span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                    <span className="svg-icon toggle-off svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Vulnerable Groups</h4>
                            </div>
                            <div id="kt_job_5_5" className="collapse fs-6 ms-1">
                                <div className="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                                    A set or subset of persons with some specific physical, 
                                    social, political, or economic condition or characteristic
                                    that places the group at a higher risk of suffering a burden, 
                                    or at a risk of suffering a disproportionate burden
                                    of the social, economic or environmental impacts of the organization's operations.
                                </div>
                                <strong className="mb-4 text-primary fw-bold fs-6 ps-10">A few examples</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export {Stakeholders}