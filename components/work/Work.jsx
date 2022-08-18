import { useState } from 'react';
import SelectButton from './SelectButton';
import SelectedWork from './SelectedWork';
import classes from './Work.module.scss';

const works = [
  {
    id: 0,
    company: 'Mach85',
    title: 'Junior Software Developer Co-op',
    date: 'September - December 2021',
    bullets: ['Something about Mach85', 'Something else about Mach85'],
  },
  {
    id: 1,
    company: 'Populus Global Solutions',
    title: 'Full Stack Developer Co-op',
    date: 'May - August 2022',
    bullets: ['Something about Populus', 'Something else about Populus'],
  },
].reverse();

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(works[0]);

  const onWorkSelected = (work) => {
    setSelectedWork(work);
  };

  return (
    <div id="work" className={`layout ${classes.work}`}>
      <div className={classes.wrapper}>
        <h1 className={`section-header`}>Work Experience</h1>
        <div className={`border-highlight ${classes.container}`}>
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
          <div className={classes.info}>
            <SelectedWork work={selectedWork} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
