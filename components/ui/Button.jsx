import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
