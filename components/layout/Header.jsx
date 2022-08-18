import classes from './Header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Social Links Here</div>
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
    </header>
  );
};

export default Header;
