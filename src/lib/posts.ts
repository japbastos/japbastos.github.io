import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        description: string;
      })
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Extract first image if it exists in content and not in frontmatter
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const imageMatch = matterResult.content.match(imageRegex);
  const coverImage = (matterResult.data.coverImage as string) || imageMatch?.[1] || null;

  // Remove the first image from content if we're using it as a cover
  const contentToProcess = imageMatch ? matterResult.content.replace(imageMatch[0], '') : matterResult.content;

  const processedContent = await remark()
    .use(html)
    .process(contentToProcess);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    coverImage,
    ...(matterResult.data as {
      title: string;
      date: string;
      description: string;
    })
  };
}
