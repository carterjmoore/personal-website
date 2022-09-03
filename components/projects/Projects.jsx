import ScrollTo from '../ui/ScrollTo';
import ShowOnScroll from '../ui/ShowOnScroll';
import classes from './Projects.module.scss';
import Slider from './Slider';

const Projects = () => {
  return (
    <ShowOnScroll>
      <div className={`layout ${classes.projects}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="personal-projects" />
          <h2 className={`section-header ${classes.header}`}>
            Personal Projects
          </h2>
          <Slider />
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default Projects;
