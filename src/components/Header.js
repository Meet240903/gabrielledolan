import React, { useState } from 'react'
import headerLogo from '../assets/images/headerLogo.svg'
import '../assets/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import headerData from '../data/HeaderData'

const Header = ({ showLogo }) => {
    const [headerMenu, showHeaderMenu] = useState(false)
    return (
        <>
            <div className='header-page-section-container'>
                <div className='header-page-section-img' style={{ backgroundColor: showLogo ?? 'transparent' }}>
                    {
                        showLogo && <Link to='/'>
                            <img src={headerLogo} className='img-fluid' alt='header-logo' />
                        </Link>
                    }
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
                                {
                                    headerData?.map((data, index) => (
                                        <div key={index}>
                                            <Link to={`/${data?.slugs}`} style={{ textDecoration: 'none' }} onClick={() => showHeaderMenu(false)}>
                                                <h1>{data?.title}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                                <Link to='' style={{ textDecoration: 'none' }} onClick={() => showHeaderMenu(false)}>
                                    <h1>Resources</h1>
                                </Link>
                                <Link to='/starterkit' style={{ textDecoration: 'none' }} onClick={() => showHeaderMenu(false)}>
                                    <h1>7 Day Storytelling Starter Kit</h1>
                                </Link>
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
