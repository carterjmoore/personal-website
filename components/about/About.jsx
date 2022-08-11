import classes from './About.module.scss';

const About = () => {
  return (
    <div className={`layout ${classes.about}`}>
      <h1>About</h1>
      <div className={classes.columns}>
        <div className={classes.bg}>
          <p>Test</p>
        </div>
        <div className={classes.bg}>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default About;
