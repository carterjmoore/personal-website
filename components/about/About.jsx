import Image from 'next/image';
import classes from './About.module.scss';

const About = () => {
  return (
    <div className={`layout ${classes.about}`}>
      <h1 className={classes.header}>About Me</h1>
      <div className={classes.columns}>
        <div className={classes.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
            sem, consequat eu nunc sed, tincidunt condimentum ipsum. Suspendisse
            neque augue, viverra non neque ac, egestas congue neque. Curabitur
            at orci posuere, pellentesque nisi a, tincidunt sapien. Sed nec elit
            nec risus tempor ultricies. Aliquam pellentesque lectus maximus
            auctor vulputate. Mauris at imperdiet metus. Sed eget lorem metus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
            sem, consequat eu nunc sed, tincidunt condimentum ipsum. Suspendisse
            neque augue, viverra non neque ac, egestas congue neque. Curabitur
            at orci posuere, pellentesque nisi a, tincidunt sapien. Sed nec elit
            nec risus tempor ultricies. Aliquam pellentesque lectus maximus
            auctor vulputate. Mauris at imperdiet metus. Sed eget lorem metus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
            sem, consequat eu nunc sed, tincidunt condimentum ipsum. Suspendisse
            neque augue, viverra non neque ac, egestas congue neque. Curabitur
            at orci posuere, pellentesque nisi a, tincidunt sapien. Sed nec elit
            nec risus tempor ultricies. Aliquam pellentesque lectus maximus
            auctor vulputate. Mauris at imperdiet metus. Sed eget lorem metus.
          </p>
        </div>
        <div>
          <div className={classes.image}>
            <Image
              src="/me.jpg"
              width={1224}
              height={816}
              alt="Image Of Carter"
              objectFit="cover"
              objectPosition="75% 50%"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
