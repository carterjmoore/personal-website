import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '../ui/Button';
import ColumnList from '../ui/ColumnList';
import classes from './ProjectSlide.module.scss';

const ProjectSlide = (props) => {
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
            <ColumnList list={props.project.skills} numCols={3} />
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
          onClick={props.onPrev}
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
          onClick={props.onNext}
        >
          &#8250;
        </Button>
      </div>
    </div>
  );
};

export default ProjectSlide;
