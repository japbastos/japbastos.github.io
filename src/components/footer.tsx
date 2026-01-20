import { Instagram, Youtube, Github, Linkedin } from 'lucide-react';

const socials = [
  {
    href: 'https://linkedin.com/in/japbastos',
    label: 'LinkedIn',
    icon: Linkedin
  },
  {
    href: 'https://github.com/japbastos',
    label: 'GitHub',
    icon: Github
  },
  {
    href: 'https://instagram.com/ojapbastos',
    label: 'Instagram',
    icon: Instagram
  },
  {
    href: 'https://youtube.com/@japbastos',
    label: 'Youtube',
    icon: Youtube
  }
  // {
  //   href: 'https://x.com/japbastos',
  //   label: 'Twitter',
  //   icon: Twitter
  // }
];

export function Footer() {
  return (
    <footer className="mx-auto my-6">
      <ul className="flex justify-center gap-6">
        {socials.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Icon className="h-8 w-8" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
