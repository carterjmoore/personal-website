import Button from '../ui/Button';
import classes from './ProjectSlide.module.scss';

const ProjectSlide = (props) => {
  return (
    <div className={`border-highlight ${classes.container}`}>
      <h3>{props.project.name}</h3>
      <div className={classes.info}></div>
      <div className={classes.buttons}>
        <Button onClick={props.onPrev}>Prev</Button>
        <Button onClick={props.onNext}>Next</Button>
      </div>
    </div>
  );
};

export default ProjectSlide;
