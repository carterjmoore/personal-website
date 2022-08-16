import About from '../components/about/About';
import Home from '../components/home/Home';
import Projects from '../components/projects/Projects';
import Work from '../components/work/Work';

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Projects />
    </>
  );
}
