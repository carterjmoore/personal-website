import classes from './Header.module.scss';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import MobileContext from '../../context/MobileContext';
import ModalContext from '../../context/ModalContext';
import ScrollContext from '../../context/ScrollContext';

const Header = () => {
  const mobileCtx = useContext(MobileContext);
  const modalCtx = useContext(ModalContext);
  const scrollCtx = useContext(ScrollContext);

  const burgerHandler = () => {
    modalCtx.showModal();
  };

  return (
    <header
      className={`${classes.header} ${
        scrollCtx.scrolledDown ? classes.hide : ''
      }`}
    >
      {!mobileCtx.isMobile && (
        <>
          <div className={classes.socials}>
            <a
              href="https://www.linkedin.com/in/carterjmoore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/carterjmoore?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#work">Work</Link>
              </li>
              <li>
                <Link href="#personal-projects">Personal Projects</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
      {mobileCtx.isMobile && (
        <FontAwesomeIcon
          onClick={burgerHandler}
          className={classes.burger}
          icon={faBars}
        />
      )}
    </header>
  );
};

export default Header;
