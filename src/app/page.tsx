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
    <section className="centred container mt-10 overflow-auto text-center">
      <div className="flex items-center justify-between gap-12">
        <div>
          <img
            className="h-[300] w-[300] rounded-full"
            src="https://avatars.githubusercontent.com/u/7764204?v=4"
            alt="japbastos"
          />
        </div>
        <div className="text-justify">
          <h1 className="section-title mb-6">Hi, I'm João Bastos 👋</h1>
          <p className="paragraph">
            Software Engineer and Technical Lead with 7+ years of experience
            building scalable web platforms using JavaScript and TypeScript.
          </p>
          <p className="text-muted-foreground">
            Focused on system architecture, code quality, and developer
            experience.
          </p>
          {/* <p className="paragraph">
            A computer engineer by choice, a teacher at heart, and a lifelong
            technology enthusiast.
          </p>
          <p className="paragraph">
            Passionate about clean design, usability, and personal growth.
          </p>
          <p className="paragraph">
            I am always striving to learn, evolve, and create impactful digital
            experiences.
          </p> */}
        </div>
      </div>
      <div>
        <a
          className="bg-brand-secondary hover:bg-brand-primary mt-4 inline-block rounded-md px-4 py-2 text-white transition-colors"
          href="/experience"
        >
          View my professional experience →
        </a>
      </div>
      <div className="mt-10 text-center">
        <h1 className="section-title mb-6">What I do? 🤔</h1>
        <div className="quoted w-4xl">
          <p className="text-2xl italic">
            I help teams build scalable and maintainable web applications with a
            strong focus on usability, clean design, and performance. From
            frontend UI to backend APIs, I work across the stack to deliver
            reliable and elegant digital experiences.
          </p>
          {/* <p className="text-2xl italic">
            I build modern, high-performance web applications with a focus on
            usability, clean design, and scalability. Passionate about creating
            elegant digital experiences, I work across the stack—from frontend
            UI to backend APIs.
          </p> */}
        </div>
      </div>
      <div className="mt-10 text-center">
        <h1 className="section-title">Main Tech Stack ⚡</h1>
        <p className="text-muted-foreground my-4">
          Technologies I work with daily
        </p>
        <ul className="mt-8 flex gap-14">
          {techIcons.map((item) => (
            <li key={item.alt}>
              <Image
                src={item.path}
                alt={item.alt}
                width={80}
                height={80}
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
