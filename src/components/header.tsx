'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="relative z-50 h-20 w-full shadow-md bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-full items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" aria-label="Página inicial" className="flex items-center">
          <Image
            src="/logo/logo.svg"
            alt="japbastos"
            width={60}
            height={60}
            className="md:w-20 md:h-20"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-xl lg:text-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "transition-all duration-300 hover:text-brand-secondary",
                    isActive 
                      ? "text-brand-secondary opacity-100 font-semibold" 
                      : "text-foreground opacity-50 hover:opacity-100"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 border-b border-border p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 text-xl font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2 transition-colors",
                      isActive 
                        ? "text-brand-secondary opacity-100 font-bold" 
                        : "text-foreground opacity-70"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
