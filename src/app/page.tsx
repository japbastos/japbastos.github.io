import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
        <div className="flex items-center justify-between gap-12">
          <div>
            <img className="rounded-full h-[300] w-[300]" src="https://avatars.githubusercontent.com/u/7764204?v=4" alt="japbastos"/>
          </div>
          <div className="text-justify">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Hi, I&apos;m João Bastos 👋
          </h1>
          {/* <p className="text-xl text-muted-foreground mt-2">
            Desenvolvedor Full-Stack
          </p> */}
          <p className="mt-4 max-w-xl text-lg">
            A computer engineer by choice, a teacher at heart, and a lifelong technology enthusiast.
          </p>
          <p className="mt-4 max-w-xl text-lg">
            Passionate about clean design, usability, and personal growth.
          </p>
          <p className="mt-4 max-w-xl text-lg">
            I am always striving to learn, evolve, and create impactful digital experiences.
          </p>
        </div>
        
      </div>
    </section>
  );
}

