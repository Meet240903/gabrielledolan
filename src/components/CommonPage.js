import React from 'react'
import headerData from '../data/HeaderData';
import { useParams } from 'react-router-dom';
import StorytellingWorkshop from './StorytellingWorkshop';

const CommonPage = () => {
    const { slugs } = useParams();
    const data = headerData?.find(index => slugs === index?.slugs)

    return (
        <>
            <StorytellingWorkshop sectionData={data?.sectionData} />
        </>
    )
}

export default CommonPage
