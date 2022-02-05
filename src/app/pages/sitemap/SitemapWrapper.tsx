/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Dropdown1} from '../../../_metronic/partials'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const SitemapPage: FC = () => (
    <>
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container-xxl">
                <div className="card">
                    <div className="card-body p-5 px-lg-19 py-lg-16">
                        <div className="mb-15">
                            <h1 className="fs-2x text-dark mb-6">Sitemap</h1>
                            <div className="fs-5 text-muted fw-bold">Welcome & thank you for your early support! We are currently in Beta, 
                            but all that means is we will be releasing additional services for you down the road. 
                            Below is our sitemap, which outlines what features we currently have, and which ones are in the works.
                            If you have any questions or comments, feel free to let us know!
                            </div>
                        </div>
                        <div className="row g-10 mb-15">
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">Overview</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">Company Dashboard</a>
                                    <a href="#" className="link-primary mb-6">Fund Dashboard</a>
                                    <a href="#" className="link-primary mb-6">Portfolio Dashboard</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">Assessments</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">Materiality Matrix</a>
                                    <a href="#" className="link-primary mb-6">Impact Rating</a>
                                    <a href="#" className="link-primary mb-6">Fund Rating</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">Resources</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">Modules</a>
                                    <a href="#" className="link-primary mb-6">Analyst Contact</a>
                                    <a href="#" className="link-primary mb-6">Charity Tracker</a>
                                    <a href="#" className="link-primary">Privacy</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-10 mb-18">
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">Community</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">Feed</a>
                                    <a href="#" className="link-primary mb-6">Profiles</a>
                                    <a href="#" className="link-primary mb-6">Audio Files</a>
                                    <a href="#" className="link-primary">Free Solutions</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">About</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">About Us</a>
                                    <a href="#" className="link-primary mb-6">Our Team</a>
                                    <a href="#" className="link-primary">Contact Us</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h3 className="fw-bolder text-dark mb-7">What to Expect</h3>
                                <div className="d-flex flex-column fw-bold fs-4">
                                    <a href="#" className="link-primary mb-6">Benchmarks</a>
                                    <a href="#" className="link-primary mb-6">Due Diligence Tools</a>
                                    <a href="#" className="link-primary mb-6">Community Feed</a>
                                    <a href="#" className="link-primary">ESG News Hub</a>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 bg-light text-center mb-4">
                            <div className="card-body py-12">
                                <a href="#" className="mx-4">
                                    <img src="/public/media/svg/brand-logos/facebook-4.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="/public/media/svg/brand-logos/instagram-2-1.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="assets/media/svg/brand-logos/github.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="assets/media/svg/brand-logos/behance.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="assets/media/svg/brand-logos/pinterest-p.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="assets/media/svg/brand-logos/twitter.svg" className="h-30px my-2" alt="" />
                                </a>
                                <a href="#" className="mx-4">
                                    <img src="assets/media/svg/brand-logos/dribbble-icon-1.svg" className="h-30px my-2" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )

const SitemapWrapper: FC = () => {
    const intl = useIntl()
  
    return (
    <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Sitemap'})}</PageTitle>
        <SitemapPage />
    </>
    )
  }
  
  export {SitemapWrapper}