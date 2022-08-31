import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Projects from '../components/projects/Projects';
import Work from '../components/work/Work';
import Head from 'next/head';
import Modal from '../components/ui/Modal';

export default function Index() {
  return (
    <>
      <Head>
        <title>Carter Moore&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Carter Moore's personal portfolio website, built entirely from scratch."
        />
      </Head>
      <Modal />
      <Home />
      <About />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}
