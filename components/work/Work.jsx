import { useState } from 'react';
import SelectButton from './SelectButton';
import classes from './Work.module.scss';

const works = [
  {
    id: 0,
    company: 'Mach85',
    title: 'Junior Software Developer Co-op',
    date: 'September - December 2021',
    bullets: ['Something', 'Something else'],
  },
  {
    id: 1,
    company: 'Populus Global Solutions',
    title: 'Full Stack Developer Co-op',
    date: 'May - August 2022',
    bullets: ['Something', 'Something else'],
  },
].reverse();

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(works[0]);

  const onWorkSelected = (work) => {
    setSelectedWork(work);
  };

  return (
    <div className={`layout ${classes.work}`}>
      <h1 className={`section-header`}>Work Experience</h1>
      <div className={`border-highlight ${classes.wrapper}`}>
        <div className={classes.select}>
          {works.map((work) => {
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
        <div className={classes.info}></div>
      </div>
    </div>
  );
};

export default Work;