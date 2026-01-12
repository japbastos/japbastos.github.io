import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  try {
    const post = await getPostData(params.slug);

    return (
      <article className="container mx-auto py-8 prose dark:prose-invert">
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
  } catch (error) {
    notFound();
  }
}
