import InlineLink from '../ui/InlineLink';
import classes from './SelectedWork.module.scss';

const SelectedWork = (props) => {
  return (
    <div className={classes['selected-work']}>
      <h3>
        {`${props.work.title} - `}
        <InlineLink href={props.work.href}>{props.work.company}</InlineLink>
      </h3>
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
