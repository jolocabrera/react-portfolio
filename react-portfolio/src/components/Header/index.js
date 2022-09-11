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
setPortfolioSelected
      } = props;


    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">Jolo Cabrera</a>
            </h2>
            <Nav         contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected} >
            </Nav>
        </header>
    );
}

export default Header;