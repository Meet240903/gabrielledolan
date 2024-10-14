import React, { useState } from 'react'
import headerLogo from '../assets/images/headerLogo.svg'
import '../assets/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    const [headerMenu, showHeaderMenu] = useState(false)
    return (
        <>
            <div className='header-page-section-container'>
                <div className='header-page-section-img'>
                    <img src={headerLogo} className='img-fluid' alt='header-logo' />
                </div>
                <div className='header-page-left-section'>
                    <button onClick={() => showHeaderMenu(!headerMenu)}>
                        <FontAwesomeIcon icon={faBars} className='header-fa-bars' />
                    </button>
                </div>
            </div>
            {
                headerMenu && <div className='header-page-section-link-main-menu'>
                    <div className='row mx-0 header-page-section-link-main-menu-content'>
                        <div className='col-md-7 header-page-section-link-main-menu-left-content'>
                            <img src={headerLogo} className='img-fluid' alt='header-logo' />
                        </div>
                        <div className='col-md-5 header-page-section-link-main-menu-right-content'>
                            <div className='header-page-section-link-main-menu-right-inner-content'>
                                <h1>Home</h1>
                                <h1>Storytelling Workshops</h1>
                                <h1>Conference Speaking</h1>
                                <h1>Thought Leadership</h1>
                                <h1>About</h1>
                                <h1>Books</h1>
                                <h1>Resources</h1>
                                <h1>7 Day Storytelling Starter Kit</h1>
                            </div>
                            <div className='header-page-section-link-main-menu-right-inner-footer-content'>
                                <div className='header-social-icons'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faXTwitter} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faYoutube} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <p className='fw-bold'>Subscribe to our Newsletter</p>
                                <p>Contact us by sending us an email or alternatively calling our office on</p>
                                <p>+61 3 8383 2128.</p>
                                <p className='fw-bold'>enquiry@gabrielledolan.com</p>
                                <small>Developed by Trama Studio</small>
                            </div>
                        </div>
                        <button onClick={() => showHeaderMenu(!headerMenu)}>
                            <FontAwesomeIcon icon={faClose} className='header-fa-bars' />
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Header
