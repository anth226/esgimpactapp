import React, {FC} from 'react';
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers';
import { StatsCardModel } from './models/StatsCardModel';

const StatsCard: FC<StatsCardModel> = ({ count, imageColor, imagePath, title }) => (
    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
        <div className='d-flex align-items-center'>
            <KTSVG
                path={imagePath}
                className={`svg-icon-3 svg-icon-${imageColor} me-2`}
            />
            <div className='fs-2 fw-bolder'>{count}</div>
        </div>
        <div className='fw-bold fs-6 text-gray-400'>{title}</div>
    </div>
)

export default StatsCard;