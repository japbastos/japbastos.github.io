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
          <h1 className="section-title">Hi, I'm João Bastos 👋</h1>
          <p className="paragraph">
            A computer engineer by choice, a teacher at heart, and a lifelong
            technology enthusiast.
          </p>
          <p className="paragraph">
            Passionate about clean design, usability, and personal growth.
          </p>
          <p className="paragraph">
            I am always striving to learn, evolve, and create impactful digital
            experiences.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h1 className="section-title">What I do? 🤔</h1>
        <div className="quoted w-4xl">
          <p className="text-2xl italic">
            I build modern, high-performance web applications with a focus on
            usability, clean design, and scalability. Passionate about creating
            elegant digital experiences, I work across the stack—from frontend
            UI to backend APIs.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h1 className="section-title">Main Tech Stack ⚡</h1>
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
