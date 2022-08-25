import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a
        href="https://github.com/carterjmoore/personal-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built from scratch by Carter Moore
      </a>
    </div>
  );
};

export default Footer;
