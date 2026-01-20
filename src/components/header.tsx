import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="h-20 w-full shadow-md">
      <nav className="container mx-auto grid h-full grid-cols-[1fr_auto_1fr] items-center justify-between">
        <div />
        <ul className="flex items-center gap-6 justify-self-center text-2xl">
          <li>
            <Link
              href="/"
              aria-label="Página inicial"
              className="flex items-center"
            >
              <Image
                src="/logo/logo.svg"
                alt="japbastos"
                width={80}
                height={80}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* <li>
            <Link href="/projects">Projects</Link>
          </li> */}
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          {/* <li>
            <Link href="/resume">Resume</Link>
          </li> */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="mr-6 flex justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
