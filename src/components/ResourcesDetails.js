import React from 'react'
import '../assets/css/resourcesDetails.css'
import { useParams } from 'react-router-dom'
import resourcesData from '../data/ResourcesData';

const ResourcesDetails = () => {
    const { slugs } = useParams();
    const resourceData = resourcesData?.find(index => index?.slugs === slugs);
    return (
        <>
            <div className='resources-details-page-section-container'>
                <div className='row resources-details-page-section-content'>
                    <div className='col-md-6 resources-details-page-section-left-content'>
                        <small>{resourceData?.date}</small>
                        <h1>{resourceData?.title}</h1>
                        <p>{resourceData?.type}</p>
                    </div>
                    <div className='col-md-6 resources-details-page-section-right-content'>
                        <img src={resourceData?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResourcesDetails
