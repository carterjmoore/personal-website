import classes from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div style={{ backgroundColor: 'blue' }}></div>
        <div style={{ backgroundColor: 'blue' }}></div>
      </div>
    </div>
  );
};

export default Slider;
