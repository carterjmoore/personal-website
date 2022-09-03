import { useContext, useEffect, useRef, useState } from 'react';
import ScrollContext from '../../context/ScrollContext';
import classes from './ShowOnScroll.module.scss';

const ShowOnScroll = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const ref = useRef();
  const [hasScrolledTo, setHasScrolledTo] = useState(false);

  useEffect(() => {
    console.log(ref.current.offsetTop);
    if (
      scrollCtx.scrollLocation >=
      ref.current.offsetTop - window.innerHeight / 2
    ) {
      setHasScrolledTo(true);
    }
  }, [scrollCtx.scrollLocation]);

  return (
    <div
      ref={ref}
      className={`${classes.showOnScroll} ${
        !hasScrolledTo ? classes.hide : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default ShowOnScroll;
