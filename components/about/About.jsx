import Image from 'next/image';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import classes from './About.module.scss';
import ColumnList from '../ui/ColumnList';
import ShowOnScroll from '../ui/ShowOnScroll';

const About = () => {
  return (
    <ShowOnScroll>
      <div className={`layout ${classes.about}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="about" />
          <h2 className={`section-header`}>About Me</h2>
          <div className={classes.columns}>
            <div className={`border-highlight ${classes.text}`}>
              <p>
                I fell in love with coding after my first year of university,
                during a co-op term at a{' '}
                <InlineLink href="https://mach85.com/">
                  local startup
                </InlineLink>
                . It was the first time that I genuinely enjoyed going to work,
                and it made me realize that this is what I wanted to spend my
                professional life doing. But I didn&apos;t just want to spend it
                coding, I wanted to spend it getting <em>good</em> at coding,
                and constantly learning new technologies.
              </p>
              <p>
                With this newfound motivation, I began investing my free time
                into expanding my skills through{' '}
                <InlineLink href="#personal-projects" local={true}>
                  personal projects
                </InlineLink>{' '}
                and{' '}
                <InlineLink href="https://udemy.com/">
                  online courses
                </InlineLink>
                . Since then, I&apos;ve completed another co-op term where I
                worked in a{' '}
                <InlineLink href="https://populusplus.com/">
                  larger team
                </InlineLink>
                , and I&apos;ve transferred to a{' '}
                <InlineLink href="https://uwaterloo.ca/">
                  larger university
                </InlineLink>
                . I&apos;m a fast learner, and always looking to improve.
              </p>
              <p>
                Recently, I&apos;ve been spending my free time developing{' '}
                <InlineLink href="https://www.imglabs.io/">
                  imglabs.io
                </InlineLink>{' '}
                with a couple of friends. We provide image proxying services
                through a more optimized method than competitors, which we plan
                on{' '}
                <InlineLink href="https://www.imglabs.io/pricing">
                  marketing
                </InlineLink>{' '}
                in the near future.
              </p>
            </div>
            <div className={classes.rightCol}>
              <div className={`shadow-highlight ${classes.image}`}>
                <Image
                  src="/me.jpg"
                  alt="Image Of Carter"
                  layout="fill"
                  objectFit="cover"
                  loading="eager"
                ></Image>
              </div>
              <div>
                <h4 className={classes.technologies}>
                  Some technologies I&apos;ve been using lately:
                </h4>
                <ColumnList
                  list={[
                    'React',
                    'Angular',
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'Next.js',
                    'TypeScript',
                    'JavaScript',
                    'CSS / Sass',
                    'Java / Spring Boot',
                    'C++',
                    'Android Studio',
                  ]}
                  numCols={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default About;
