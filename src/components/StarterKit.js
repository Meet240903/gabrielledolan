import React from 'react'
import sectionImg from '../assets/images/starterKitImg.jpg'
import '../assets/css/starterkit.css'

const StarterKit = () => {
    return (
        <>
            <div className='starterkit-page-section-container'>
                <div className='row starterkit-page-section-content'>
                    <div className='col-md-6 starterkit-page-section-left-content'>
                        <h1>7 day</h1>
                        <h2>Storytelling Starter Kit</h2>
                        <div className='starterkit-page-section-left-inner-content'>
                            <p>Want to get better at sharing stories in business?
                                Enter your details below to gain free access to the 7 Day Storytelling Starter Kit</p>
                            <div className='starter-kit-form'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 starterkit-page-section-right-content'>
                        <img src={sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarterKit
