import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect, useRef } from 'react';
import * as homeStyles from "./home.module.less";
import Nav from '../nav/nav';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Education from '../education/education';

const desktopWidth = 992;
const desktopHeight = 415;

export const Home: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => { 
      const handleResize = () => {
        setIsDesktop(
          window.innerWidth >= desktopWidth && window.innerHeight > desktopHeight
        );
      }
      handleResize();
      setIsLoading(false);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  
    const aboutRef = useRef(null);
    const meRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const contactRef = useRef(null);
  
    const mobileNavHeight = isDesktop ? 0 : 65;
  
    const scrollToRef = (myRef: React.MutableRefObject<any>) =>
      window.scrollTo(0, myRef.current.offsetTop - mobileNavHeight);
    const handleScroll = (section: any) => {
      switch (section) {
        case 'about':
          scrollToRef(aboutRef);
          break;
        case 'experience':
          scrollToRef(experienceRef);
          break;
        case 'skills':
          scrollToRef(skillsRef);
          break;
        case 'education':
          scrollToRef(educationRef);
          break;
        case 'contact':
          scrollToRef(contactRef);
          break;
        default:
          scrollToRef(meRef);
          break;
      }
    };
  
    const executeScroll = (myRef: React.MutableRefObject<any>) => scrollToRef(myRef);
  
    const profileImg = isDesktop
      ? <StaticImage src='../../images/profilehoriz.jpeg' alt='Caseys Profile Pic' className={homeStyles.pic} style={{ marginTop: `${mobileNavHeight}px` }} />
      : <StaticImage src='../../images/profilevert.jpeg' alt='Caseys Profile Pic' className={homeStyles.pic} style={{ marginTop: `${mobileNavHeight}px` }} />;
  
    const meSectionContent = isDesktop ? (
      <h1 className={homeStyles.picTitle}>
        <p onClick={aboutRef => executeScroll}>
          I want to <span className={homeStyles.createThings}> create things </span>
        </p>
        <p>
          that <span className={homeStyles.makeDiff}>change lives</span>
        </p>
      </h1>
    ) : (
      <div className={homeStyles.changeLives}>
        <div>{`Let's Change Lives.`}</div>
      </div>
    );
  
    return isLoading ? (<div>Loading...</div>) : (
      <>
        {/* Tells phones not to lie about their width: Use for all responsive designs. Applies margin to outside, padding to inside, etc... */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <Nav isDesktop={isDesktop} scrolling={handleScroll} />
        <div className={homeStyles.intro} style={isDesktop ? { marginLeft: '200px' } : undefined}>
          <section id="me" className={homeStyles.meSection} ref={meRef}>
            {profileImg}
            {meSectionContent}
          </section>
          <section id="about" ref={aboutRef}>
            <About />
          </section>
          <section id="experience" ref={experienceRef}>
            <Experience />
          </section>
          <section id="skills" ref={skillsRef}>
            <Skills />
          </section>
          <section id="education" ref={educationRef}>
            <Education />
          </section>
          <section id="contact" ref={contactRef}>
            <Contact />
          </section>
        </div>
      </>
    );
};