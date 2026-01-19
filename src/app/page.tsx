/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
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
    </section>
  );
}
