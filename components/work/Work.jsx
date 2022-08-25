import { useState } from 'react';
import ScrollTo from '../ui/ScrollTo';
import SelectButton from './SelectButton';
import SelectedWork from './SelectedWork';
import classes from './Work.module.scss';
import WORKS from './WorkData';

const TRANSITION_TIME = 300;

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(WORKS[0]);
  const [hideSelection, setHideSelection] = useState(false);

  const onWorkSelected = (work) => {
    if (selectedWork === work) {
      return;
    }
    setHideSelection(true);
    setTimeout(() => {
      setSelectedWork(work);
      setHideSelection(false);
    }, TRANSITION_TIME);
  };

  return (
    <div className={`layout ${classes.work}`}>
      <div className={classes.wrapper}>
        <ScrollTo id="work" />
        <h2 className={`section-header`}>Work Experience</h2>
        <div className={`border-highlight ${classes.container}`}>
          <div className={classes.select}>
            {WORKS.map((work) => {
              return (
                <SelectButton
                  work={work}
                  selectedId={selectedWork.id}
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
  );
};

export default Work;
