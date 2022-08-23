import { useRouter } from 'next/router';
import classes from './InlineLink.module.scss';

const InlineLink = (props) => {
  const router = useRouter();

  const onLocalLink = () => {
    router.push(props.href);
  };

  return (
    <>
      {!props.local && (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.inlineLink}
        >
          <span>{props.children}</span>
        </a>
      )}
      {props.local && (
        <a className={classes.inlineLink} onClick={onLocalLink}>
          <span>{props.children}</span>
        </a>
      )}
    </>
  );
};

export default InlineLink;
