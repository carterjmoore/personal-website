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
          friends. We use a highly optimized serverless core to serve images
          with better performance than many competitors, and we plan on{' '}
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
    link: 'https://youtu.be/q1CD4dVF6Xs',
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
          increasingly shorter time frames, and aim for a high score. Running
          out of time or making one mistake means a game over.
        </p>
        <p>
          The game features 6 game modes, each having a different set of
          actions, as well as 3 difficulty levels that make you run out of time
          faster. It also includes a how-to-play, settings menu, music, and
          voice narration for actions!
        </p>
        <p>
          Check out a{' '}
          <InlineLink href="https://youtu.be/q1CD4dVF6Xs">
            gameplay demo
          </InlineLink>{' '}
          video here!
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
          <InlineLink href="https://youtu.be/yO3kN4jicp4">
            gameplay demo
          </InlineLink>{' '}
          here! If you&apos;re having a hard time understanding the mechanics,
          check out the{' '}
          <InlineLink href="https://github.com/carterjmoore/Gun-Time/blob/main/README.md">
            GitHub README
          </InlineLink>{' '}
          for more instructions and some optional cheats.
        </p>
      </>
    ),
  },
  {
    name: 'Portfolio Website',
    github: 'https://github.com/carterjmoore/personal-website',
    link: '#',
    skills: ['React', 'Next.js', 'Sass', 'Vercel', 'Font Awesome'],
    image: {
      src: '/portfolio.jpg',
      alt: 'Portfolio landing page',
    },
    content: (
      <>
        <p>
          Rather than using a template for my portfolio website, I decided to
          build it from scratch in order to improve my React and CSS skills. I
          tried to rely on dependencies as little as possible (other than for
          things like icons), so all components in this project were built
          completely from scratch by myself.
        </p>
        <p>
          I learned a lot of neat CSS techniques while building this website
          &ndash; I had mostly used CSS frameworks like Tailwind and PrimeNG in
          the past, so writing it all from scratch with Sass was a big change!
          Building this website also taught me about how to create cool,
          reusable components like{' '}
          <InlineLink href="#personal-projects" local={true}>
            these links
          </InlineLink>
          , and how to approach creating larger, more complex components from
          scratch. I&apos;m especially proud of how the{' '}
          <InlineLink href="#work" local={true}>
            work experience
          </InlineLink>{' '}
          and{' '}
          <InlineLink href="#personal-projects" local={true}>
            personal projects
          </InlineLink>{' '}
          components turned out!
        </p>
        <p>
          I plan on adding more to the site in the future, such as cool new CSS
          effects. Stay tuned!
        </p>
      </>
    ),
  },
];

export default PROJECTS;
