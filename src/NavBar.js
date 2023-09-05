import React from 'react';
import brandImage from './Assets/logoWhite.png';

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {/*CONTAINER FLUID MAKES NAV BAR SPAN THE FULL WIDTH */}
            <div className="container-fluid">
            

                {/*LOGO IN TOP LEFT CORNER*/}
                <a className="navbar-brand" href="#">
                    <img src={brandImage} alt="JasonBunce" height="60" />
                </a>

                {/*Toggler for mobile screen. Appears when small screen. Toggles the navbarItems*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* This div contains all the elements that will collapse into the hamburger menu on smaller screens */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    {/* Primary navigation links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Home link */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>

                    {/* Search Form */}
                    <div className="position-absolute" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                    {/* GitHub Icon aligned to far right*/}
                <div className="ms-auto">
                    <a href="https://github.com/JasonBrunch/note-taking-app" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
