import classes from './Projects.module.scss';
import Slider from './slider/Slider';

const Projects = () => {
  return (
    <div className={`layout ${classes.projects}`}>
      <div className={classes.wrapper}>
        <h1 className={`section-header`}>Personal Projects</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Projects;
