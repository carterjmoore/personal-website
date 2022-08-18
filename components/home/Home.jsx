import ScrollTo from '../ui/ScrollTo';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <ScrollTo id="home" />
      <div className={classes.home}>
        <div className={'layout ' + classes['home-textbox']}>
          <h3 className={classes.hi}>Hi, I&apos;m</h3>
          <h1 className={classes.carter}>Carter Moore.</h1>
          <h1 className={classes.subheader}>
            A full stack software developer.
          </h1>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
