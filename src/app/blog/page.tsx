import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <section className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Minhas reflexões sobre tecnologia, desenvolvimento e carreira.
      </p>
      <div className="mt-8 space-y-6">
        {allPosts.map(({ slug, date, title, description }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="block rounded-lg border p-4 transition-colors hover:bg-muted"
          >
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{date}</p>
            <p className="mt-2">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
