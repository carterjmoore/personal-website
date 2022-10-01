import { useState } from 'react';
import ProjectSlide from './ProjectSlide';
import classes from './Slider.module.scss';
import PROJECTS from './ProjectData';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDebounce, setSlideDebounce] = useState(false);

  const handleNext = () => {
    if (slideDebounce) {
      return;
    }

    debounceSliding();
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % PROJECTS.length;
    });
  };

  const handlePrev = () => {
    if (slideDebounce) {
      return;
    }

    debounceSliding();
    setCurrentIndex((prevIndex) => {
      return prevIndex !== 0 ? prevIndex - 1 : PROJECTS.length - 1;
    });
  };

  const handleSelect = (index) => {
    return () => {
      if (slideDebounce) {
        return;
      }

      debounceSliding();
      setCurrentIndex(index);
    };
  };

  // Slider was sometimes skipping a slide on button click, so this is a fix to that
  const debounceSliding = () => {
    setSlideDebounce(true);
    setTimeout(() => {
      setSlideDebounce(false);
    }, 300);
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
