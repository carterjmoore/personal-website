import classes from './Header.module.scss';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import MobileContext from '../../context/MobileContext';
import ModalContext from '../../context/ModalContext';
import ScrollContext from '../../context/ScrollContext';

const Header = () => {
  const mobileCtx = useContext(MobileContext);
  const modalCtx = useContext(ModalContext);
  const scrollCtx = useContext(ScrollContext);

  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const burgerHandler = () => {
    modalCtx.showModal();
  };

  useEffect(() => {
    setTimeout(() => setShowLinkedIn(true), 600);
    setTimeout(() => setShowGithub(true), 800);
    setTimeout(() => setShowHome(true), 1000);
    setTimeout(() => setShowAbout(true), 1200);
    setTimeout(() => setShowWork(true), 1400);
    setTimeout(() => setShowProjects(true), 1600);
    setTimeout(() => setShowResume(true), 1800);
  }, []);

  let headerClasses = '';
  if (scrollCtx.scrollLocation > 40) {
    headerClasses += classes.scrolled;
    if (scrollCtx.scrolledDown) {
      headerClasses += ` ${classes.hide}`;
    }
  }

  return (
    <header className={`${classes.header} ${headerClasses}`}>
      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/in/carterjmoore/"
          target="_blank"
          rel="noopener noreferrer"
          className={!showLinkedIn ? classes.hide : ''}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/carterjmoore?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={!showGithub ? classes.hide : ''}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      {!mobileCtx.isMobile && (
        <nav>
          <ul>
            <li className={!showHome ? classes.hide : ''}>
              <Link href="#home">Home</Link>
            </li>
            <li className={!showAbout ? classes.hide : ''}>
              <Link href="#about">About</Link>
            </li>
            <li className={!showWork ? classes.hide : ''}>
              <Link href="#work">Work</Link>
            </li>
            <li className={!showProjects ? classes.hide : ''}>
              <Link href="#personal-projects">Personal Projects</Link>
            </li>
            <li className={!showResume ? classes.hide : ''}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
      {mobileCtx.isMobile && (
        <FontAwesomeIcon
          onClick={burgerHandler}
          className={`${classes.burger} ${!showHome ? classes.hide : ''}`}
          icon={faBars}
        />
      )}
    </header>
  );
};

export default Header;
