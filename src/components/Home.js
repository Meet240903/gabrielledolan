import React, { useState, useEffect } from 'react'
import '../assets/css/home.css'
import logo from '../assets/images/logo2.svg'
import sectionImg1 from '../assets/images/homePageImgs/sectionImg1.jpg'
import sectionImg2 from '../assets/images/homePageImgs/sectionImg2.jpg'
import sectionImg3 from '../assets/images/homePageImgs/sectionImg3.jpg'
import sectionImg4 from '../assets/images/homePageImgs/sectionImg4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const sliderData = [
        {
            sectionImg: sectionImg1,
            title: "Storytelling Workshops",
            content: "Effective communication is one of the keys to success. The ability to share your ideas or instructions in an impactful way is vital for leaders and executives alike...",
        },
        {
            sectionImg: sectionImg2,
            title: "Conference Speaking",
            content: "Immersing yourself in the understanding and study of communication doesn't automatically make you an engaging and inspiring speaker, but it certainly...",
        },
        {
            sectionImg: sectionImg3,
            title: "Thought Leadership",
            content: "There can be a point in a career where your ideas, skills and experience combine to elevate you above your peers. You don't have to be old and wise...",
        },
        {
            sectionImg: sectionImg4,
            title: "New Book Release",
            content: "Magnetic Stories - Your brand is the stories people share about you when you’re not in the room, and it’s these brand stories that determine if people buy from you, employ you, work for you or invest in you....",
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide functionality with useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [sliderData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    return (
        <>
            <div className='home-page-section-container'>
                <div className='row mx-0 home-page-section-content'>
                    <div className='col-md-5 home-page-section-left-content'>
                        <img src={logo} className='img-fluid' alt='logo' />
                        <div className='home-page-section-left-content-counter'>
                            <hr className="custom-line" />
                            <div className='home-page-counter-box'>
                                <p>{currentSlide + 1}</p>
                            </div>
                        </div>
                        {/* Add key to force re-render and trigger animations */}
                        <div key={currentSlide} className='home-page-section-left-absolute-content'>
                            <h1>{sliderData[currentSlide].title}</h1>
                            <p>{sliderData[currentSlide].content}</p>
                            <div className='home-page-section-left-absolute-content-button'>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='home-page-slider-controls'>
                            <button onClick={prevSlide}><FontAwesomeIcon icon={faLessThan} /></button>
                            <button onClick={nextSlide}><FontAwesomeIcon icon={faGreaterThan} /></button>
                        </div>
                    </div>
                    <div className='col-md-7 home-page-section-right-content'>
                        {/* Add key to force re-render and trigger animations */}
                        <img
                            key={currentSlide}
                            src={sliderData[currentSlide].sectionImg}
                            className='img-fluid'
                            alt={sliderData[currentSlide].title}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
