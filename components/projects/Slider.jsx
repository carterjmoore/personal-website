import { useState } from 'react';
import ProjectSlide from './ProjectSlide';
import classes from './Slider.module.scss';

const projects = [
  { name: 'imglabs.io' },
  { name: 'Reflex Revolution' },
  { name: 'Gun Time' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % projects.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex !== 0 ? prevIndex - 1 : projects.length - 1;
    });
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.slider}
        style={{ transform: `translateX(calc(${currentIndex}*(-100%)))` }}
      >
        {projects.map((project) => {
          return (
            <ProjectSlide
              key={project.name}
              project={project}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          );
        })}
      </div>
      <div className={classes.progress}>
        {projects.map((project, index) => {
          return (
            <div
              key={project.name}
              className={classes['progress-circle']}
              style={{
                backgroundColor: `${
                  index === currentIndex ? 'cyan' : 'transparent'
                }`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
