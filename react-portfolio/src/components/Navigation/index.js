import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li> */}
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(false); setAboutSelected(true); setPortfolioSelected(false) }}>About Me</span>
        </li>         
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(false); setAboutSelected(false); setPortfolioSelected(true) }}>My Work</span>
        </li>
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false) }}>Contact</span>
        </li>
        {/* <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              My Work
            </a> */}
      </ul>
    </nav>
  );
}

export default Nav;