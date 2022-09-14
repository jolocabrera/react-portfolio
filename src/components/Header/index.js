import React, { useState } from 'react';
import Nav from '../Navigation';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
    const {
contactSelected,
setContactSelected,
aboutSelected,
setAboutSelected,
portfolioSelected,
setPortfolioSelected,
resumeSelected,
setResumeSelected,
      } = props;


    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">Jolo Cabrera</a>
            </h1>
            <Nav         contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected} >
            </Nav>
        </header>
        
    );
}

export default Header;