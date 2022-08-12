import classes from './SelectButton.module.scss';

const SelectButton = (props) => {
  const onClick = () => {
    props.onClick(props.work);
  };

  return (
    <div
      onClick={onClick}
      key={props.work.id}
      className={`${classes['select-button']} ${
        props.work.id === props.selectedId ? classes.selected : ''
      }`}
    >
      {props.work.company}
    </div>
  );
};

export default SelectButton;
