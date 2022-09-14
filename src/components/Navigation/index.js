import React from 'react';


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(false); setAboutSelected(true); setPortfolioSelected(false);setResumeSelected(false) }}>About Me</span>
        </li>         
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(false); setAboutSelected(false); setPortfolioSelected(true);setResumeSelected(false) }}>My Work</span>
        </li>
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false);setResumeSelected(false) }}>Contact Me</span>
        </li>
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => { setContactSelected(false); setAboutSelected(false); setPortfolioSelected(false); setResumeSelected(true) }}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;