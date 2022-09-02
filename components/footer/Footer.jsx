import InlineLink from '../ui/InlineLink';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a
        className={classes.built}
        href="https://github.com/carterjmoore/personal-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built from scratch by Carter Moore
      </a>
      <p className={classes.linkedIn}>
        Get in touch through{' '}
        <InlineLink href="https://www.linkedin.com/in/carterjmoore/">
          LinkedIn
        </InlineLink>
      </p>
    </div>
  );
};

export default Footer;
