import React from 'react'
import '../assets/css/home.css'
import logo from '../assets/images/logo2.svg'
import sectionImg1 from '../assets/images/homePageImgs/sectionImg1.jpg'

const Home = () => {
    return (
        <>
            <div className='home-page-section-container'>
                <div className='row mx-0 home-page-section-content'>
                    <div className='col-md-5 home-page-section-left-content'>
                        <img src={logo} className='img-fluid' alt='logo' />
                        <div className='home-page-section-left-content-counter'>
                            <hr class="custom-line" />
                            <div className='home-page-counter-box'>
                                <p>1</p>
                            </div>
                        </div>
                        <div className='home-page-section-left-absolute-content'>
                            <h1>Storytelling Workshops</h1>
                            <p>Effective communication is one of the keys to success. The ability to share your ideas or instructions in an impactful way is vital for leaders and executives alike...</p>
                            <div className='home-page-section-left-absolute-content-button'>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 home-page-section-right-content'>
                        <img src={sectionImg1} className='img-fluid' alt='logo' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
