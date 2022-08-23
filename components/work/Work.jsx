import { useState } from 'react';
import ScrollTo from '../ui/ScrollTo';
import SelectButton from './SelectButton';
import SelectedWork from './SelectedWork';
import classes from './Work.module.scss';

const works = [
  {
    id: 0,
    company: 'Mach85',
    href: 'https://mach85.com/',
    title: 'Junior Software Developer Co-op',
    date: 'September - December 2021',
    bullets: ['Something about Mach85', 'Something else about Mach85'],
  },
  {
    id: 1,
    company: 'Populus Global Solutions',
    href: 'https://www.populusplus.com/',
    title: 'Full Stack Developer Co-op',
    date: 'May - August 2022',
    bullets: [
      "Developed several key features of the company's web app product from front to back using Angular and Spring Boot.",
      'Used Angular paired with PrimeNG to craft intuitive front-end user experiences.',
      'Leveraged Spring Boot with Java to construct a REST API, allowing users to perform various CRUD operations on several types of data.',
      'Crafted SQL scripts to update and migrate data in a Postgres database.',
      'Worked with a full Atlassian toolset to ensure our team abided to Agile development principles.',
    ],
  },
].reverse();

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(works[0]);

  const onWorkSelected = (work) => {
    setSelectedWork(work);
  };

  return (
    <div className={`layout ${classes.work}`}>
      <div className={classes.wrapper}>
        <ScrollTo id="work" />
        <h2 className={`section-header`}>Work Experience</h2>
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
