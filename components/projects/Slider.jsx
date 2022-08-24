import { useState } from 'react';
import ProjectSlide from './ProjectSlide';
import classes from './Slider.module.scss';
import PROJECTS from './ProjectData';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % PROJECTS.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex !== 0 ? prevIndex - 1 : PROJECTS.length - 1;
    });
  };

  const handleSelect = (index) => {
    return () => {
      setCurrentIndex(index);
    };
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.slider}
        style={{ transform: `translateX(calc(${currentIndex}*(-100%)))` }}
      >
        {PROJECTS.map((project) => {
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
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={project.name}
              onClick={handleSelect(index)}
              className={`${classes['progress-circle']} ${
                index === currentIndex ? classes.selected : ''
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
