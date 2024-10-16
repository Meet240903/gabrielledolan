import { faClose, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '../assets/images/headerLogo.svg';
import '../assets/css/resources.css';
import resourcesData from '../data/ResourcesData';
import { Link } from 'react-router-dom';

const Resources = () => {
    const [sidebar, showSidebar] = useState(false);
    const sidebarData = [
        { title: "All" },
        { title: "Blog" },
        { title: "Published Articles" },
        { title: "Programs & Workshops" },
        { title: "Podcasts" },
        { title: "White Papers" },
        { title: "Storytelling Resources" },
        { title: "Books" },
        { title: "Interviews" },
    ];

    // Default filter title set to "all"
    const [filterTitle, setFilterTitle] = useState("all");

    // Filter resourcesData based on filterTitle
    const filteredData = filterTitle === "all"
        ? resourcesData
        : resourcesData.filter(data => data.type.toLocaleLowerCase() === filterTitle);

    // Handle sidebar title click
    const handleFilterClick = (title) => {
        setFilterTitle(title.toLocaleLowerCase());
        showSidebar(false); // Close sidebar after selecting
    };

    // Capitalize first letter function
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <>
            <div className='resources-page-section-container'>
                <div className='resources-page-section-title'>
                    {/* Display 'Resources' if filterTitle is 'all', otherwise capitalize the filterTitle */}
                    <h1>{filterTitle === "all" ? "Resources" : capitalizeFirstLetter(filterTitle)}</h1>
                </div>
                <div className='resources-page-section-content'>
                    {
                        filteredData.map((data, index) => (
                            <div className='resources-page-section-content-boxs' key={index}>
                                <div className='resources-page-section-content-boxs-top-section'>
                                    <button><FontAwesomeIcon icon={faPlus} /></button>
                                    <small>{data.date}</small>
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.type}</p>
                                <div className='resources-page-section-content-boxs-img'>
                                    <img src={data.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='resources-page-section-search-button' onClick={() => showSidebar(!sidebar)}>
                    Search
                </button>
                <div className={`resources-page-section-filter-sidebar ${sidebar ? 'siderbar-open' : ''}`}>
                    <div className='resources-page-section-filter-sidebar-top-section'>
                        <Link to='/'>
                            <img src={logo} className='img-fluid' alt='header-logo' />
                        </Link>
                        <FontAwesomeIcon icon={faClose} className='sidebar-close-icon' onClick={() => showSidebar(false)} />
                    </div>
                    <div className='resources-page-section-filter-sidebar-searchbar-section'>
                        <FontAwesomeIcon icon={faSearch} className='sidebar-search-icon' />
                        <input type='text' />
                    </div>
                    <div className='resources-page-section-filter-sidebar-content-section'>
                        {
                            sidebarData.map((item, index) => (
                                <h3 key={index} onClick={() => handleFilterClick(item.title)}
                                    style={{
                                        color: item?.title?.toLocaleLowerCase() === filterTitle ? '#fff' : '#000',
                                    }}
                                >
                                    {item?.title}
                                </h3>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resources;
