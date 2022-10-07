import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { Helmet } from 'react-helmet';





function App() {
  const [pages] = useState([
    {
      name: 'about',
      description: 'Who am I',
    },
    { name: 'work', description: 'Portfolio of my projects' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Jolo Cabrera</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <Hero></Hero>
      <main>
        {contactSelected &&
          <ContactForm></ContactForm>
        }
        {aboutSelected &&
        <About/>
        }
        {portfolioSelected &&
        <Portfolio/>
        }
        {resumeSelected &&
        <Resume/>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
