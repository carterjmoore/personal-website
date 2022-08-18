import classes from './InlineLink.module.scss';

const InlineLink = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.inlineLink}
    >
      <span>{props.children}</span>
    </a>
  );
};

export default InlineLink;
