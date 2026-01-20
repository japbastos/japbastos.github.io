import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';

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
    <article className="prose dark:prose-invert container mx-auto py-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {post.title}
      </h1>
      <p className="text-muted-foreground">{post.date}</p>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
