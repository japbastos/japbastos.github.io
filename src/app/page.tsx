/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const techIcons = [
  {
    alt: 'typescript',
    path: '/logo/TypeScript.svg'
  },
  {
    alt: 'node',
    path: '/logo/Node.svg'
  },
  {
    alt: 'nest',
    path: '/logo/Nest.svg'
  },
  {
    alt: 'react',
    path: '/logo/React.svg'
  },
  {
    alt: 'next',
    path: '/logo/Next.svg'
  }
];

export default function Home() {
  return (
    <section className="centred container mt-10 px-6 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
        <div className="flex justify-center">
          <img
            className="w-40 md:w-72 rounded-full border-4 border-brand-secondary/20 shadow-xl"
            src="https://avatars.githubusercontent.com/u/7764204?v=4"
            alt="japbastos"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="section-title mb-4 md:mb-6">Hi, I'm João Bastos 👋</h1>
          <p className="paragraph mx-auto md:mx-0">
            Software Engineer and Technical Lead with 7+ years of experience
            building scalable web platforms using JavaScript and TypeScript.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Focused on system architecture, code quality, and developer
            experience.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <a
          className="bg-brand-secondary hover:bg-brand-primary inline-block rounded-md px-6 py-3 text-lg font-medium text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
          href="/experience"
        >
          View my professional experience →
        </a>
      </div>
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h1 className="section-title mb-6">What I do? 🤔</h1>
        <div className="quoted">
          <p className="text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-zinc-600 dark:text-zinc-300">
            I help teams build scalable and maintainable web applications with a
            strong focus on usability, clean design, and performance. From
            frontend UI to backend APIs, I work across the stack to deliver
            reliable and elegant digital experiences.
          </p>
        </div>
      </div>
      <div className="mt-16 mb-20 text-center">
        <h1 className="section-title">Main Tech Stack ⚡</h1>
        <p className="text-muted-foreground my-4 text-base md:text-lg">
          Technologies I work with daily
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-8 md:gap-14">
          {techIcons.map((item) => (
            <li key={item.alt} className="transition-transform hover:scale-110">
              <Image
                src={item.path}
                alt={item.alt}
                width={60}
                height={60}
                className="md:w-20 md:h-20"
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
