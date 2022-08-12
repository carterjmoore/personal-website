import classes from './SelectedWork.module.scss';

const SelectedWork = (props) => {
  return (
    <div className={classes['selected-work']}>
      <h3>{`${props.work.title} - ${props.work.company}`}</h3>
      <em>{props.work.date}</em>
      <ul>
        {props.work.bullets.map((bullet) => {
          return <li key={bullet}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
};

export default SelectedWork;
