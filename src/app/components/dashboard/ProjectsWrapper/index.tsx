import React, {FC, useEffect, useState} from 'react';
import {Card2} from '../../../../_metronic/partials/content/cards/Card2';
import { CardModel } from './models/CardModel';

const dataProjects = require('./defaultData/data.json')

const ProjectsWrapper: FC = () => {
    const [projects, setProjects] = useState([]);

    return (
        <>
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
            {dataProjects.map((element: CardModel, index: number) => (
                <div className='col-md-6 col-xl-4' key={index + element.title}>
                    <Card2
                        icon={element.icon}
                        badgeColor={element.badgeColor}
                        status={element.status}
                        statusColor={element.statusColor}
                        title={element.title}
                        description={element.description}
                        date={element.date}
                        time={element.time}
                        progress={element.progress}
                        //users={users1}
                    />
                </div>
            ))}
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
}

export default ProjectsWrapper;