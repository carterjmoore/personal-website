import { useState } from 'react';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import ShowOnScroll from '../ui/ShowOnScroll';
import SelectButton from './SelectButton';
import SelectedWork from './SelectedWork';
import classes from './Work.module.scss';
import WORKS from './WorkData';

const TRANSITION_TIME = 300;

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(WORKS[0]);
  const [selectedButtonId, setSelectedButtonId] = useState(WORKS[0].id);
  const [hideSelection, setHideSelection] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState(undefined);

  const onWorkSelected = (work) => {
    if (selectedWork === work) {
      return;
    }
    clearTimeout(animationTimeout);
    setHideSelection(true);
    setSelectedButtonId(work.id);
    setAnimationTimeout(
      setTimeout(() => {
        clearTimeout(animationTimeout);
        setSelectedWork(work);
        setHideSelection(false);
      }, TRANSITION_TIME)
    );
  };

  return (
    <ShowOnScroll>
      <div className={`layout ${classes.work}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="work" />
          <h2 className={`section-header ${classes.workHeader}`}>
            Work Experience
          </h2>
          <p className={classes.recommendations}>
            <InlineLink href="https://www.linkedin.com/in/carterjmoore/details/recommendations/">
              View recommendations from my employers and colleagues
            </InlineLink>
          </p>
          <div className={`border-highlight ${classes.container}`}>
            <div className={classes.select}>
              {WORKS.map((work) => {
                return (
                  <SelectButton
                    work={work}
                    selectedId={selectedButtonId}
                    onClick={onWorkSelected}
                    key={work.id}
                  />
                );
              })}
            </div>
            <div
              className={`${classes.info} ${hideSelection ? classes.hide : ''}`}
              style={{ transition: `opacity ease-in-out ${TRANSITION_TIME}ms` }}
            >
              <SelectedWork work={selectedWork} />
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default Work;
