import classes from './Header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Social Links Here</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Personal Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
