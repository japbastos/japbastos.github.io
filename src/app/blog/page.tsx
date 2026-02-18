import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <section className="centred container px-6 py-6 md:py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
      <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
        My reflections on life, personal and professional development, as well as technology and career.
      </p>
      <div className="mt-8 space-y-6 w-full max-w-3xl">
        {allPosts.map(({ slug, date, title, description }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="hover:bg-muted block rounded-xl border border-border p-5 md:p-6 transition-all hover:shadow-md"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-brand-secondary">{title}</h2>
            <p className="text-muted-foreground mt-1 text-xs md:text-sm font-medium">{date}</p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
