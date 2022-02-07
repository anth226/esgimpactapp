import React, {FC} from 'react';
import {Card2} from '../../../_metronic/partials/content/cards/Card2';
import {useLocation} from 'react-router';
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers';
import {Link} from 'react-router-dom';

const ImpactHeader: FC = () => {
    const location = useLocation()

    return (
        <>  
        card here
            <div className="card mb-12">
                <div className="card-body flex-column p-5">
                    <div className="d-flex align-items-center h-lg-250px p-5 p-lg-15">
                        <div className="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                            <h1 className="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-10">Aligning Stakeholder & Company Values</h1>
                            <div className="position-relative w-100">
                                The materiality matrix reflects the outcome <strong className="text-primary">of</strong> an organization's environmental, social, and governance impact <strong className="text-primary">on</strong> its stakeholders.
                            </div>
                        </div>
                        <div className="flex-equal d-flex justify-content-center align-items-end ms-5">
                            <img className="mh-125px mh-lg-275px mb-lg-n12" src="/media/esgi-illustrations/mountain.png" alt="image" />
                        </div>
                    </div>
                    <div className="card-rounded bg-light d-flex flex-stack flex-wrap p-5">
                        <ul className="nav flex-wrap border-transparent fw-bolder">
                            <li className="nav-item my-1">
                                <Link
                                className={
                                `btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase ` +
                                (location.pathname === '/materiality/about' && 'active')
                                }
                                to='/materiality/about'
                                >
                                About
                                </Link>
                            </li>
                            <li className="nav-item my-1">
                                <Link
                                className={
                                `btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase ` +
                                (location.pathname === '/materiality/examples' && 'active')
                                }
                                to='/materiality/examples'
                                >
                                Examples
                                </Link>
                            </li>
                            <li className="nav-item my-1">
                                <Link
                                className={
                                `btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase ` +
                                (location.pathname === '/materiality/completed' && 'active')
                                }
                                to='/materiality/completed'
                                >
                                Completed 
                                </Link>
                            </li>
                        </ul>
                        
                        <Link
                            className={
                            `btn btn-primary btn-active-secondary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase` +
                            (location.pathname === '/materiality/assessment' && 'active')
                            }
                            type="button" 
                            to='/materiality/assessment'
                            >
                            Start 
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImpactHeader;

