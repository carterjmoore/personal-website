import ProjectSlide from './ProjectSlide';
import classes from './Slider.module.scss';

const projects = [{ name: 'ImgLabs' }, { name: 'Reflex Revolution' }];

const Slider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        {projects.map((project) => {
          return <ProjectSlide key={project.name} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
