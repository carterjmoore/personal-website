import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={'layout ' + classes['home-textbox']}>
        <h1>Test</h1>
      </div>
    </div>
  );
};

export default Home;
