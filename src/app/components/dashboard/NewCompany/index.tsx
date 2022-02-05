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
                            If you have any questions, please check our <a href="#" className="fw-bolder me-1">FAQs</a> or ask your <a href="#" className="fw-bolder">dedicated analyst</a>.
                        </p>
                    </div>
                    <div className="d-flex flex-center flex-wrap">
                        <a href="#" className="btn btn-outline btn-outline-dark btn-active-dark m-2">FAQs</a>
                        <a href="#" className="btn btn-dark m-2">Analyst Contact</a>
                    </div>
                </div>
            </div>

            <div className="card card-custom mb-10">
                <div className="card-header">
                    <h3 className="card-title">Getting Started</h3>
                    <div className="card-toolbar">
                        3 / 17
                     </div>
                </div>
                <div className="card-body">
                    Lorem Ipsum. This is a placeholder for a "getting started" card. If users have no previous record of a full Impact Assessment (Materiality, Rating, Analyst Calls), then this card will show. We will have one card for the fund and one card for the company. This is the company card.
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        </>
    )
}

export default NewCompany;