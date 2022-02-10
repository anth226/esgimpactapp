import React, {FC} from 'react';
import {Card2} from '../../../_metronic/partials/content/cards/Card2';
import ProfileInfo from '../../components/dashboard/ProfileInfo';
import ProjectsWrapper from '../../components/dashboard/ProjectsWrapper';
import NewCompany from '../../components/dashboard/NewCompany'

const DashboardPage: FC = () => (
    <>
        <ProfileInfo />
        <NewCompany />
        <ProjectsWrapper />
    </>
)

export default DashboardPage;