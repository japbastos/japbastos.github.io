import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="py-4 mx-auto">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex gap-4">
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
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
}
