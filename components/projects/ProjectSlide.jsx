import Button from '../ui/Button';
import ColumnList from '../ui/ColumnList';
import classes from './ProjectSlide.module.scss';

const ProjectSlide = (props) => {
  return (
    <div className={`border-highlight ${classes.container}`}>
      <div className={classes.top}>
        <div className={classes.heading}>
          <h3>{props.project.name}</h3>
          <ColumnList list={['test1', 'test2']} numCols={2} />
        </div>
        <div className={classes.image}></div>
      </div>
      <div className={classes.info}></div>
      <div className={classes.buttons}>
        <Button onClick={props.onPrev}>Prev</Button>
        <Button onClick={props.onNext}>Next</Button>
      </div>
    </div>
  );
};

export default ProjectSlide;
