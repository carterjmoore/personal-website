import InlineLink from '../../components/ui/InlineLink';

const PROJECTS = [
  {
    name: 'imglabs.io',
    github: 'https://github.com/imglabs-io',
    link: 'https://www.imglabs.io/',
    skills: ['React', 'Next.js', 'Tailwind UI', 'Node.js', 'Supabase'],
    image: {
      src: '/imglabs.jpg',
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
          possible. Some interesting features of the site I developed are the{' '}
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
    github: 'https://github.com/fredy20501/reflex-revolution',
    link: 'TODO',
    skills: ['Android Studio', 'Java'],
    image: {
      src: '/reflex-revolution.jpg',
      alt: 'Several screens of Reflex Revolution',
    },
    content: (
      <>
        <p>
          Reflex Revolution is a native Android app for a game similar to the
          toy{' '}
          <InlineLink href="https://en.wikipedia.org/wiki/Bop_It">
            Bop It
          </InlineLink>{' '}
          by Hasbro. You must complete a series of random actions in
          increasingly shorter time frames, and and aim for a high score.
          Running out of time or making one mistake means a game over.
        </p>
        <p>
          The game features 6 game modes, each having a different set of
          actions, as well as 3 difficulty levels which make you run out of time
          faster. It also includes a how-to-play, settings menu, music, and
          voice narration for actions!
        </p>
        <p>
          Check out a <InlineLink href="TODO">gameplay demo</InlineLink> video
          here!
        </p>
      </>
    ),
  },
  {
    name: 'Gun Time',
    github: 'https://github.com/carterjmoore/Gun-Time',
    link: 'https://play.unity.com/mg/other/webgl-dvj',
    skills: ['Unity', 'C#'],
    image: {
      src: '/gun-time.jpg',
      alt: 'Gun Time home screen',
    },
    content: (
      <>
        <p>
          Gun Time is a first-person platformer game with shooter and puzzler
          aspects. The player breaks into a facility to steal the Time Gun,
          which allows them to speed up or slow down time for whatever they
          shoot. The player must use the gun&apos;s powers on enemies and the
          environment to solve puzzles, and escape the facility alive.
        </p>
        <p>
          The game features seven levels, two enemy types, several types of
          interactive environmental objects, complex mechanics, and cool
          physics, all of which lead to tons of fun gameplay! It also
          incorporates sound effects, music, settings, home and pause screens,
          and much more.
        </p>
        <p>
          <InlineLink href="https://play.unity.com/mg/other/webgl-dvj">
            Try the game
          </InlineLink>{' '}
          in your browser, or check out a{' '}
          <InlineLink href="TODO">gameplay demo</InlineLink> here! If
          you&apos;re having a hard time understanding the mechanics, check out
          the{' '}
          <InlineLink href="https://github.com/carterjmoore/Gun-Time/blob/main/README.md">
            GitHub README
          </InlineLink>{' '}
          for more instructions and some optional cheats.
        </p>
      </>
    ),
  },
];

export default PROJECTS;
