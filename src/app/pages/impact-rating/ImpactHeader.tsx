import React, {FC} from 'react';
import {Card2} from '../../../_metronic/partials/content/cards/Card2';
import {useLocation} from 'react-router';
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers';
import {Link} from 'react-router-dom';
import image from '../../../../public/media/illustrations/sketchy-1/20.png'

const ImpactHeader: FC = () => {
    const location = useLocation()

    return (
        <>  
        <div className="card mb-12">
                <div className="card-body flex-column p-5">
                    <div className="d-flex align-items-center h-lg-250px p-5 p-lg-15">
                        <div className="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                            <h1 className="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-10">Quantifying ESG Standards</h1>
                            <div className="position-relative w-100">
                            The impact rating is a <strong className="text-primary">material examination</strong> of your internal and external business operations through an ethical lens. It is composed of environmental, social, governance, technology, supply chain, and sector specific metrics.
                            </div>
                        </div>
                        <div className="flex-equal d-flex justify-content-center align-items-end ms-5">
                            <img className="mh-125px mh-lg-275px mb-lg-n12" src="/media/esgi-illustrations/mountain-2.png" alt="image" />
                        </div>
                    </div>
                    <div className="card-rounded bg-light d-flex flex-stack flex-wrap p-5">
                        <ul className="nav flex-wrap border-transparent fw-bolder">
                            <li className="nav-item my-1">
                                <Link
                                className={
                                `btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase ` +
                                (location.pathname === '/impact-rating/about' && 'active')
                                }
                                to='/impact-rating/about'
                                >
                                About
                                </Link>
                            </li>
                            <li className="nav-item my-1">
                                <Link
                                className={
                                `btn btn-color-gray-600 btn-active-white btn-active-color-primary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase ` +
                                (location.pathname === '/impact-rating/examples' && 'active')
                                }
                                to='/impact-rating/examples'
                                >
                                Examples
                                </Link>
                            </li>
                        </ul>
                        
                        <Link
                            className={
                            `btn btn-primary btn-active-secondary fw-boldest fs-8 fs-lg-base nav-link px-3 px-lg-8 mx-1 text-uppercase` +
                            (location.pathname === '/impact-rating/assessment' && 'active')
                            }
                            type="button" 
                            to='/impact-rating/assessment'
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

