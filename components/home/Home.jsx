import { useEffect, useState } from 'react';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import classes from './Home.module.scss';

const Home = () => {
  const [showHi, setShowHi] = useState(false);
  const [showCarter, setShowCarter] = useState(false);
  const [showSubHeader, setShowSubHeader] = useState(false);
  const [showParargraph, setShowParargraph] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHi(true), 2000);
    setTimeout(() => setShowCarter(true), 2800);
    setTimeout(() => setShowSubHeader(true), 4200);
    setTimeout(() => setShowParargraph(true), 6200);
  }, []);

  return (
    <>
      <ScrollTo id="home" />
      <div className={classes.home}>
        <div className={'layout ' + classes['home-textbox']}>
          <h3 className={`${classes.hi} ${!showHi ? classes.hide : ''}`}>
            Hi, I&apos;m
          </h3>
          <h1
            className={`${classes.carter} ${!showCarter ? classes.hide : ''}`}
          >
            Carter Moore.
          </h1>
          <h1
            className={`${classes.subheader} ${
              !showSubHeader ? classes.hide : ''
            }`}
          >
            A passionate software developer.
          </h1>
          <p
            className={`${classes.paragraph} ${
              !showParargraph ? classes.hide : ''
            }`}
          >
            Currently studying Computer Science at the{' '}
            <InlineLink href="https://uwaterloo.ca/">
              University of Waterloo
            </InlineLink>
            . I love learning new languages and frameworks, and have lately been
            spending my free time learning about{' '}
            <InlineLink href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/">
              MERN Fullstack Development
            </InlineLink>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
