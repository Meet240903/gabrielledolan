import React, { useState } from 'react'
import '../assets/css/storytellingWorkshops.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

const StorytellingWorkshop = ({ sectionData }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sectionData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + sectionData.length) % sectionData.length);
    };

    return (
        <div className='storytelling-workshops-page-section-container'
            style={{
                backgroundColor: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.bgColor : '',
            }}
        >
            <div className='row storytelling-workshops-page-section-content'
                style={{
                    padding: sectionData[currentSlide]?.paddingY ? '10rem 0' : '',
                }}
            >
                <div className={`storytelling-workshops-page-section-left-content ${sectionData[currentSlide]?.sectionImg || !sectionData[currentSlide]?.clientSection ? 'col-md-6' : 'col-md-12'}`}>

                    {/* about section client slide content */}
                    {
                        sectionData[currentSlide]?.clientSection && (
                            <div className="about-client-section-content">
                                {sectionData[currentSlide]?.clientData?.map((data, index) => (
                                    <div
                                        className="about-client-section-content-boxs"
                                        key={index}
                                        style={{
                                            backgroundColor: data?.bgColor ? '#ff3644' : '#fff',
                                            color: data?.bgColor ? '#fff' : '#ff3644',
                                        }}
                                    >
                                        <p>{data?.clientName}</p>
                                        <small>{data?.type}</small>
                                    </div>
                                ))}
                            </div>
                        )
                    }


                    <h1>{sectionData[currentSlide].title}</h1>
                    <div className='storytelling-workshops-page-section-left-inner-content'>
                        <h3 className={`${sectionData[currentSlide]?.threeColumns ? 'd-none' : ''}`} style={{
                            color: sectionData[currentSlide]?.color ? sectionData[currentSlide]?.color : ''
                        }}>{sectionData[currentSlide]?.subTitle}</h3>
                        <h4>{sectionData[currentSlide]?.bookDetails}</h4>

                        {/* Conditionally render 3 columns for the last slide */}
                        {sectionData[currentSlide]?.threeColumns ? (
                            <div className="row storytelling-workshops-last-slide">
                                <div className="col-md-4">
                                    <h3>{sectionData[currentSlide].subTitle}</h3>
                                    <p>{sectionData[currentSlide].content}</p>
                                    <small>{sectionData[currentSlide].smallContent}</small>
                                </div>
                                <div className="col-md-4">
                                    <h3>{sectionData[currentSlide].subTitle1}</h3>
                                    <p>{sectionData[currentSlide].content1}</p>
                                    <small>{sectionData[currentSlide].smallContent1}</small>
                                </div>
                                <div className="col-md-4" style={{ border: "none" }}>
                                    <h3>{sectionData[currentSlide].subTitle2}</h3>
                                    <p>{sectionData[currentSlide].content2}</p>
                                    <small>{sectionData[currentSlide].smallContent2}</small>
                                </div>
                            </div>
                        ) : (
                            sectionData[currentSlide]?.contentData?.map((data, index) => (
                                <p key={index}>{data?.content}</p>
                            ))
                        )}
                    </div>
                    <div className='storytelling-workshops-page-slider-controls'>
                        <button onClick={prevSlide}
                            style={{
                                backgroundColor: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.color : '',
                                color: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.bgColor : '',
                            }}
                        ><FontAwesomeIcon icon={faLessThan} /></button>
                        <button onClick={nextSlide}
                            style={{
                                backgroundColor: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.color : '',
                                color: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.bgColor : '',
                            }}
                        ><FontAwesomeIcon icon={faGreaterThan} /></button>
                    </div>
                </div>

                {sectionData[currentSlide]?.sectionImg && <div className='col-md-6 storytelling-workshops-page-section-right-content'>
                    <img
                        src={sectionData[currentSlide].sectionImg}
                        className='img-fluid'
                        alt='section-img'
                    />
                </div>}
            </div>

            <div className="storytelling-workshops-page-tracking">
                {sectionData.map((_, index) => (
                    <span
                        key={index}
                        className={`tracking-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        style={{
                            backgroundColor: index === currentSlide && sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.color : ''
                        }}
                    ></span>
                ))}
                <p style={{ color: sectionData[currentSlide]?.bgColor ? sectionData[currentSlide]?.color : '' }}>{sectionData[currentSlide].trackingTitle}</p>
            </div>
        </div>
    );
}

export default StorytellingWorkshop;
