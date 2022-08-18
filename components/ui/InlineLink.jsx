import classes from './InlineLink.module.scss';

const InlineLink = (props) => {
  return (
    <div
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.wrapper}
    >
      <a href={props.href} className={classes.inlineLink}>
        <span>{props.children}</span>
      </a>
    </div>
  );
};

export default InlineLink;
