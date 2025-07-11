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
    setTimeout(() => setShowHi(true), 2200);
    setTimeout(() => setShowCarter(true), 3000);
    setTimeout(() => setShowSubHeader(true), 4400);
    setTimeout(() => setShowParargraph(true), 6400);
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
            A passionate software engineer.
          </h1>
          <p
            className={`${classes.paragraph} ${
              !showParargraph ? classes.hide : ''
            }`}
          >
            Computer science grad from the{' '}
            <InlineLink href="https://uwaterloo.ca/">
              University of Waterloo
            </InlineLink>{' '}
            in Canada and current software engineer at{' '}
            <InlineLink href="https://optiver.com/">Optiver</InlineLink> based
            in Chicago.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
