import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type BlogPostParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;

  let post;

  try {
    post = await getPostData(slug);
  } catch (error) {
    console.error('ERROR:', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      {post.coverImage && (
        <div className="mb-10 overflow-hidden rounded-2xl border border-purple-500/20 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[400px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-secondary bg-clip-text">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-6 text-muted-foreground font-medium justify-center md:justify-start">
          <span className="h-px w-8 bg-purple-500/50" />
          {post.date}
        </div>
      </div>

      <div
        className="prose dark:prose-invert prose-zinc max-w-none 
          prose-headings:text-foreground prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-p:leading-relaxed
          prose-strong:text-purple-600 dark:prose-strong:text-purple-400 prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-500 dark:hover:prose-a:text-purple-300
          prose-img:rounded-xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-white/10
          transition-colors text-justify"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
