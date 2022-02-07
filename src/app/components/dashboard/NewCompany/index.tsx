import React, {FC} from 'react';
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import StatsCard from '../StatsCard';

const NewCompany: FC = () => {
    return (
        <>
            <div className="alert alert-dismissible bg-light-dark d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
                <div className="text-center">
                    <h5 className="fw-bolder fs-1 mb-5">Welcome to ESGi!</h5>

                    <div className="separator separator-dashed border-dark opacity-25 mb-5"></div>

                    <div className="mb-9">
                        <p>
                            To start your journey on ESG Impact, please complete your Materiality Assessment, Impact Rating, and ESG Analyst Calls.
                        </p>
                        <p>
                            If you have any questions, please check our <a href="#" className="fw-bolder">FAQ Page</a> or ask your <a href="#" className="fw-bolder">dedicated analyst</a>.
                        </p>
                    </div>
                    <div className="d-flex flex-center flex-wrap">
                        <a href="#" className="btn btn-outline btn-outline-dark btn-active-dark m-2">FAQ Page</a>
                        <a href="#" className="btn btn-primary m-2">Analyst Contact</a>
                    </div>
                </div>
            </div>

            <div className="card card-custom mb-10">
                <div className="card-header">
                    <h3 className="card-title">Your Process</h3>
                    <div className="card-toolbar">
                        1 / 5
                     </div>
                </div>

                <div className="card-body">
                    <div className="tab-content">
                        <div id="kt_activity_today" className="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-line w-75px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-75px me-4">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="black"/>
                                                    <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="black"/>
                                                    <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="black"/>
                                                    <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="black"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <a href='#' className="fs-1 fw-bold mb-2 text-primary text-hover-secondary">1. Materiality Matrix</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Aligning Stakeholder & Company Values</div>
                                            </div>
                                            
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
                                                <div className="min-w-175px pe-2">
                                                    <span className="badge badge-light text-muted">Application Design</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                    
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px pe-2">
                                                    <span className="badge badge-light-success">Completed</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
                                                <div className="min-w-175px">
                                                    <span className="badge badge-light text-muted">CRM System Development</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px">
                                                    <span className="badge badge-light-primary">In progress</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-75px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-75px me-4">
                                        <div className="symbol-label bg-light">
                                        <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="black"/>
                                                <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black"/>
                                            </svg>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n2">
                                        <div className="overflow-auto pe-3">
                                            <a href='#' className="fs-1 fw-bold mb-2 text-primary text-hover-secondary">2. Analyst Call: Materiality</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Qualitative ESG Discussion</div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
                                                <div className="min-w-175px pe-2">
                                                    <span className="badge badge-light text-muted">Application Design</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px pe-2">
                                                    <span className="badge badge-light-danger">Not Started</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
                                                <div className="min-w-175px">
                                                    <span className="badge badge-light text-muted">CRM System Development</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                    
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px">
                                                    <span className="badge badge-light-danger">Not Started</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-75px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-75px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="black"/>
                                                    <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="black"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="mb-5 pe-3">
                                        <a href='#' className="fs-1 fw-bold mb-2 text-primary text-hover-secondary">3. Impact Rating</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <div className="ms-1 fw-bold">
                                                        <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
                                                        <div className="text-gray-400">1.9mb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <div className="ms-1 fw-bold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
                                                        <div className="text-gray-400">18kb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center">
                                                    <div className="ms-1 fw-bold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
                                                        <div className="text-gray-400">20mb</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-75px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-75px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z" fill="black"/>
                                                    <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="black"/>
                                                    <path d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z" fill="black"/>
                                                    <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="black"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <a href='#' className="fs-1 fw-bold mb-2 text-primary text-hover-secondary">4. Analyst Call: Rating & ESG Strategy</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Quantitative ESG Discussion, SAOR Analysis, & Next Steps</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-75px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-75px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z" fill="black"/>
                                                    <path d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z" fill="black"/>
                                                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mt-n1">
                                        <div className="pe-3 mb-5">
                                            <a href='#' className="fs-1 fw-bold mb-2 text-primary text-hover-secondary">5. Recommended Projects</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                                                <a href="#" className="text-primary fw-bolder me-1">Jimmy Bold</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="kt_activity_week" className="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_week_tab">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-line w-100px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-100px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="black"></path>
                                                    <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n2">
                                        <div className="overflow-auto pe-3">
                                            <div className="fs-5 fw-bold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                                
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-100px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-100px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="black"></path>
                                                    <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="mb-5 pe-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <img alt="" className="w-30px me-3" src="/metronic8/demo1/assets/media/svg/files/pdf.svg"/>
                                                    <div className="ms-1 fw-bold">
                                                        <a href="/metronic8/demo1/../demo1/apps/projects/project.html" className="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
                                                        <div className="text-gray-400">1.9mb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <img alt="/metronic8/demo1/../demo1/apps/projects/project.html" className="w-30px me-3" src="/metronic8/demo1/assets/media/svg/files/doc.svg"/>
                                                    <div className="ms-1 fw-bold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
                                                        <div className="text-gray-400">18kb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center">
                                                    <img alt="/metronic8/demo1/../demo1/apps/projects/project.html" className="w-30px me-3" src="/metronic8/demo1/assets/media/svg/files/css.svg"/>
                                                    <div className="ms-1 fw-bold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
                                                        <div className="text-gray-400">20mb</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-100px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-100px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black"></path>
                                                    <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-bold mb-2">Task 
                                            <a href="#" className="text-primary fw-bolder me-1">#45890</a>merged with 
                                            <a href="#" className="text-primary fw-bolder me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="" data-bs-original-title="Nina Nilson">
                                                    <img src="/metronic8/demo1/assets/media/avatars/300-14.jpg" alt="img"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-100px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-100px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-bold mb-2">3 new application design concepts added:</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="" data-bs-original-title="Marcus Dotson">
                                                    <img src="/metronic8/demo1/assets/media/avatars/300-2.jpg" alt="img"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                <div className="overlay me-10">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="/metronic8/demo1/assets/media/stock/600x400/img-29.jpg"/>
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                                <div className="overlay me-10">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="/metronic8/demo1/assets/media/stock/600x400/img-31.jpg"/>
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="/metronic8/demo1/assets/media/stock/600x400/img-40.jpg"/>
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-100px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-100px">
                                        <div className="symbol-label bg-light">
                                            <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="black"></path>
                                                    <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-bold mb-2">New case 
                                            <a href="#" className="text-primary fw-bolder me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                                            <div className="overflow-auto pb-5">
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                    <a href="#" className="text-primary fw-bolder me-1">Alice Tan</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    Footer
                </div>
            </div>
        </>
    )
}

export default NewCompany;
