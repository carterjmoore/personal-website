import InlineLink from '../../components/ui/InlineLink';

const PROJECTS = [
  {
    name: 'imglabs.io',
    github: 'https://github.com/imglabs-io',
    link: 'https://www.imglabs.io/',
    skills: ['React', 'Next.js', 'Tailwind UI', 'Node.js', 'Supabase'],
    image: {
      src: '/imglabs.jpg',
      width: '1900px',
      height: '967px',
      alt: 'imglabs.io landing page',
    },
    content: (
      <>
        <p>
          ImgLabs is an image proxying service that I developed alongside two
          friends. We a highly optimized serverless core to serve images with
          better performance than many competitors, and we plan on{' '}
          <InlineLink href="https://www.imglabs.io/pricing">
            marketing
          </InlineLink>{' '}
          the product soon.
        </p>
        <p>
          I mainly developed the{' '}
          <InlineLink href="https://www.imglabs.io">website</InlineLink> for the
          product, and focused on making it look as professional and modern as
          possible. Some particular features of the site I developed are the{' '}
          <InlineLink href="https://www.imglabs.io/#demo">
            interactive demo
          </InlineLink>
          , the{' '}
          <InlineLink href="https://www.imglabs.io/signup">
            authentication
          </InlineLink>{' '}
          with{' '}
          <InlineLink href="https://www.imglabs.io/request-reset">
            password reset
          </InlineLink>{' '}
          functionality, and the{' '}
          <InlineLink href="https://www.imglabs.io/dashboard">
            service dashboard
          </InlineLink>{' '}
          (you&apos;ll need to create a free account and sign in to check out
          the dashboard).
        </p>
      </>
    ),
  },
  {
    name: 'Reflex Revolution',
    skills: [],
    image: {
      src: '/imglabs.jpg',
      width: '1920px',
      height: '1080px',
      alt: 'imglabs.io landing page',
    },
  },
  {
    name: 'Gun Time',
    skills: [],
    image: {
      src: '/imglabs.jpg',
      width: '1920px',
      height: '1080px',
      alt: 'imglabs.io landing page',
    },
  },
];

export default PROJECTS;
