/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  TablesWidget1,
  ListsWidget5,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'
import MaterialityHeader from '../MaterialityHeader'

export function About() {
  return (
    <>
    <MaterialityHeader />

    <div className="card">
        <div className="card-body p-10 p-lg-15">
            <h3 className="text-dark mb-7">About the Materiality Matrix</h3>
            <div className="separator separator-dashed mb-9"></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="h-100 d-flex flex-column pe-lg-6 mb-lg-0 mb-10">
                        <div className="mb-10">
                            <iframe className="card-rounded h-275px w-100" src="https://www.youtube.com/embed/TWdDZYNqlg4"></iframe>
                        </div>
                        <div className="mb-10">
                            <a href="#" className="fs-2 text-dark fw-bolder text-hover-primary text-dark lh-base">
                                What is Materiality? - How To Get Started. 
                                <p>Transcription of Intro Video</p>
                            </a>
                            <div className="separator border-primary my-10"></div>
        
                            <div className="fw-bold fs-5 text-gray-600 text-dark mt-4">We've been focused on making the from v4 to v5 but we have also not been afraid to step away been focused on from v4 to v5 speaker approachable making focused a but from a step away afraid to step away been focused Writing a blog post is a little like driving; you can study the highway code (or read articles telling you how to write a blog post) for months, but nothing can prepare you for the real thing like getting behind the wheel</div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-6 justify-content-between d-flex flex-column">
                    <div className="ps-lg-6 mb-10 mt-md-0 mt-17">
                        <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">Step 1: Identify internal and external stakeholders.</a>
                            <div className="fw-bold fs-5 mt-4 text-gray-600 text-dark">Stakeholders can be obvious, such as employees or customers, or inconspicuous, such as local communities and job applicants.</div>
                        </div>
                        <div className="d-flex flex-stack flex-wrap">
                            <div className="d-flex align-items-center pe-2">
                                <div className="symbol symbol-35px symbol-circle me-3">
                                    {/* <img src="/metronic8/demo1/assets/media/avatars/300-20.jpg" className="" alt=""/> */}
                                </div>
                                <div className="fs-5 fw-bolder">
                                    {/* <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">Jane Miller</a> */}
                                    <span className="text-muted">on Apr 27 2021</span>
                                </div>
                            </div>
                            <span className="badge badge-light-primary fw-bolder my-2">HERE</span>
                        </div>
                    </div>
                    <div className="ps-lg-6 mb-10">
                        <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">Step 2: Identify key ESG issues relevant to stakeholder groups resulting from your business operations.</a>
                            <div className="fw-bold fs-5 mt-4 text-gray-600 text-dark">We give recommendations based on your SICS sector and give examples of common ESG issues.</div>
                        </div>
                        <div className="d-flex flex-stack flex-wrap">
                            <div className="d-flex align-items-center pe-2">
                                <div className="symbol symbol-35px symbol-circle me-3">
                                    {/* <img src="/media/avatars/300-9.jpg" className="" alt=""/> */}
                                </div>
                                <div className="fs-5 fw-bolder">
                                    {/* <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">Cris Morgan</a> */}
                                    <span className="text-muted">on Mar 14 2021</span>
                                </div>
                            </div>
                            <span className="badge badge-light-primary fw-bolder my-2">HERE</span>
                        </div>
                    </div>
                    <div className="ps-lg-6 mb-10">
                        <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">Step 3: Map the issues on the matrix.</a>
                            <div className="fw-bold fs-5 mt-4 text-gray-600 text-dark">We've been focused on making the from v4 to v5 but we've also not been afraid to step away been focused</div>
                        </div>
                        <div className="d-flex flex-stack flex-wrap">
                            <div className="d-flex align-items-center pe-2">
                                <div className="symbol symbol-35px symbol-circle me-3">
                                    {/* <img src="/metronic8/demo1/assets/media/avatars/300-19.jpg" className="" alt=""/> */}
                                </div>
                                <div className="fs-5 fw-bolder">
                                    {/* <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">Cris Morgan</a> */}
                                    <span className="text-muted">on Mar 14 2021</span>
                                </div>
                            </div>
                            <span className="badge badge-light-primary fw-bolder my-2">HERE</span>
                        </div>
                    </div>
                    <div className="ps-lg-6 mb-10">
                        <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">Step 4: Discuss & Review.</a>
                            <div className="fw-bold fs-5 mt-4 text-gray-600 text-dark">We've been focused on making the from v4 to v5 but we've also not been afraid to step away been focused</div>
                        </div>
                        <div className="d-flex flex-stack flex-wrap">
                            <div className="d-flex align-items-center pe-2">
                                <div className="symbol symbol-35px symbol-circle me-3">
                                    {/* <img src="/metronic8/demo1/assets/media/avatars/300-19.jpg" className="" alt=""/> */}
                                </div>
                                <div className="fs-5 fw-bolder">
                                    {/* <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">Cris Morgan</a> */}
                                    <span className="text-muted">on Mar 14 2021</span>
                                </div>
                            </div>
                            <span className="badge badge-light-danger fw-bolder my-2">ANALYST CALL 1</span>
                        </div>
                    </div>
                    <div className="ps-lg-6">
                        <div className="mb-6">
                            <a href="#" className="fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary">Step 5: Use Matrix to set ESG targets and goals.</a>
                            <div className="fw-bold fs-5 mt-4 text-gray-600 text-dark">We've been focused on making the from v4 to v5 but we've also not been afraid to step away been focused</div>
                        </div>
                        <div className="d-flex flex-stack flex-wrap">
                            <div className="d-flex align-items-center pe-2">
                                <div className="symbol symbol-35px symbol-circle me-3">
                                    {/* <img src="/metronic8/demo1/assets/media/avatars/300-19.jpg" className="" alt=""/> */}
                                </div>
                                <div className="fs-5 fw-bolder">
                                    {/* <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">Cris Morgan</a> */}
                                    <span className="text-muted">on Mar 14 2021</span>
                                </div>
                            </div>
                            <span className="badge badge-light-danger fw-bolder my-2">ANALYST CALL 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>                     
    </div>
    </>
  )
}