import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <section className="centred container">
      <p className="mt-4 text-xl">
        Minhas reflexões sobre tecnologia, desenvolvimento e carreira.
      </p>
      <div className="mt-8 space-y-6">
        {allPosts.map(({ slug, date, title, description }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="hover:bg-muted block rounded-lg border p-4 transition-colors"
          >
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-1 text-sm">{date}</p>
            <p className="mt-2">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
