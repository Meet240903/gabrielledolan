import React, { useState, useEffect } from 'react'
import sectionImg1 from '../assets/images/storytellingWorkShopImgs/sectionImg1.jpg'
import sectionImg2 from '../assets/images/storytellingWorkShopImgs/sectionImg2.jpg'
import sectionImg3 from '../assets/images/storytellingWorkShopImgs/sectionImg3.jpg'
import '../assets/css/storytellingWorkshops.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

const StorytellingWorkshop = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Storytelling",
            subTitle: "Effective communication is one of the keys to success.",
            contentData: [
                { content: "The ability to share your ideas or instructions in an impactful way is vital for leaders and executives alike. Jargon, spin and boring legalese are relics of a bygone era. It’s time to bring a human element to corporate communication with Strategic Storytelling. It’s about finding the stories that help you connect in a meaningful way." },
            ],
            trackingTitle: "Storytelling Workshops",
        },
        {
            sectionImg: sectionImg2,
            subTitle: "Strategic Storytelling",
            contentData: [
                { content: "Since 2004, Gabrielle has emerged as one of the leading global authorities on Strategic Storytelling. She has injected her craft into top 100 companies all over the world and helped to unlock the potential of countless careers along the way." },
                { content: "A Strategic Storytelling or Powerful Presentations workshop will give those within your organisation the skills to engage and connect with colleagues and clients." },
                { content: "Our next set of virtual public workshops are now open for registrations. We have two offerings available and you can find out more and purchase tickets via the following links, Strategic Storytelling, Thursday 28th November and Powerful Presentations, Thursday 5th December." },
                { content: "For in-house workshops contact us today. Download either the Strategic Storytelling or Powerful Presentations brochures and explore some of Gabrielle’s published content to find out more." },
            ],
            trackingTitle: "Business Storytelling",
        },
        {
            sectionImg: sectionImg3,
            title: "Watch Gabrielle",
            contentData: [
                { content: "Gabrielle completed a workshop with Visa leadership team in Singapore." },
            ],
            trackingTitle: "Watch",
        },
        {
            subTitle: "Storytelling in business offers a powerful way to stimulate emotional connection. With informed analysis, recommendations and case studies, Stories for Work will give you everything you need to be more inspiring and effective in your business communications.",
            contentData: [
                { content: "Michael Ebeid, CEO & Managing Director, SBS and awarded CEO Magazines CEO of the year in 2017." },
            ],
            trackingTitle: "Emotional Connection",
            paddingY: true,
            bgColor: '#ff3644',
            color: '#fff'
        },
        {
            subTitle: "Loved every minute of it!",
            subTitle1: "Simple & Powerful",
            subTitle2: "A whole new skill level",
            content: "I recently attended Gabrielle’s Strategic Storytelling Workshop and loved every minute of it! From the moment the workshop started it was clear it was going to be a fun learning environment. Gabrielle delivers the content in such an engaging way that you actually don’t realise you’re learning until you put the theory into practice. I highly recommend this workshop or working with Gabrielle to improve storytelling capability within your business.",
            content1: "Gabrielle shared her simple but powerful storytelling techniques that we could start using immediately. We tapped into our own daily experiences to connect personal stories with business messages. Whether your role entails leadership, management, sales, clients, influencing, negotiating, meetings or even just dealing with people in general, you will definitely benefit from what Gabrielle has to share. ",
            content2: "What an amazing session and presentation at Senior Women in Multinationals. Thank you so much. I have used stories for years and always tried to use a story in our branding strategy. Gabrielle’s session took this skill to a whole new level. I can’t wait to implement this in my next presentation and strategy. ",
            smallContent: "Suzanne Richards, Internal Communications, 7-Eleven ",
            smallContent1: "Ganesh Radhakrishnan, Managed Services, Accenture Technology ",
            smallContent2: "Caroline Pilot, Strategist, TOLMAR Australia Pty Ltd ",
            trackingTitle: "Testimonials",
        },
    ]

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
                <div className={`storytelling-workshops-page-section-left-content ${sectionData[currentSlide].sectionImg ? 'col-md-6' : 'col-md-12'}`}>
                    <h1>{sectionData[currentSlide].title}</h1>
                    <div className='storytelling-workshops-page-section-left-inner-content'>
                        <h3 className={`${currentSlide === sectionData.length - 1 ? 'd-none' : ''}`} style={{
                            color: sectionData[currentSlide]?.color ? sectionData[currentSlide]?.color : ''
                        }}>{sectionData[currentSlide]?.subTitle}</h3>

                        {/* Conditionally render 3 columns for the last slide */}
                        {currentSlide === sectionData.length - 1 ? (
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
