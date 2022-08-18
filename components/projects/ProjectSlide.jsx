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
        <Button
          style={{
            fontSize: '2rem',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            paddingBottom: '4px',
            width: '2rem',
          }}
          onClick={props.onPrev}
        >
          &#8249;
        </Button>
        <Button
          style={{
            fontSize: '2rem',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            paddingBottom: '4px',
            width: '2rem',
          }}
          onClick={props.onNext}
        >
          &#8250;
        </Button>
      </div>
    </div>
  );
};

export default ProjectSlide;
