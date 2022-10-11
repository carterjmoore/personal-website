import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useContext } from 'react';
import MobileContext from '../../context/MobileContext';
import Button from '../ui/Button';
import ColumnList from '../ui/ColumnList';
import classes from './ProjectSlide.module.scss';

const ProjectSlide = (props) => {
  const mobileCtx = useContext(MobileContext);

  const handlePrev = () => {
    props.onPrev();
  };

  const handleNext = () => {
    props.onNext();
  };

  return (
    <div className={`border-highlight ${classes.container}`}>
      <div className={classes.top}>
        <div className={classes.heading}>
          <h3>{props.project.name}</h3>
          {(props.project.github || props.project.links) && (
            <div className={classes.links}>
              {props.project.github && (
                <a
                  href={props.project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              )}
              {props.project.link && (
                <a
                  href={props.project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} size="2x" />
                </a>
              )}
            </div>
          )}
          <div className={classes.skills}>
            <ColumnList
              list={props.project.skills}
              numCols={mobileCtx.isMobile ? 2 : 3}
            />
          </div>
        </div>
        <div className={`shadow-highlight ${classes.image}`}>
          <Image
            src={props.project.image.src}
            alt={props.project.image.alt}
            layout="fill"
            objectFit={
              props.project.image.objectFit
                ? props.project.image.objectFit
                : 'fill'
            }
            objectPosition={
              props.project.image.objectPosition
                ? props.project.image.objectPosition
                : '50% 50%'
            }
            loading="eager"
          ></Image>
        </div>
      </div>
      <div className={classes.content}>{props.project.content}</div>
      <div className={classes.buttons}>
        <Button
          style={{
            fontSize: '2rem',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            paddingBottom: '4px',
            width: '2rem',
          }}
          onClick={handlePrev}
        >
          &#8249;
        </Button>
        <Button
          style={{
            fontSize: '2rem',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            paddingBottom: '4px',
            width: '2rem',
          }}
          onClick={handleNext}
        >
          &#8250;
        </Button>
      </div>
    </div>
  );
};

export default ProjectSlide;
