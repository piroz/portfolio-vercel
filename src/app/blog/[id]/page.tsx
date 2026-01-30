import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogDetail, getBlogIds } from '@/lib/microcms';
import ShareButtons from '@/components/ShareButtons';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const blog = await getBlogDetail(id);
    return {
      title: `${blog.title} - Blog`,
      description: blog.description || blog.title,
      openGraph: blog.thumbnail
        ? {
            images: [blog.thumbnail.url],
          }
        : undefined,
    };
  } catch {
    return {
      title: 'Blog',
    };
  }
}

export async function generateStaticParams() {
  try {
    const ids = await getBlogIds();
    return ids.map((id) => ({
      id,
    }));
  } catch (error) {
    console.error('ブログIDの取得に失敗しました:', error);
    return [];
  }
}

export const revalidate = 3600; // 1時間ごとに再検証

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  let blog;
  try {
    blog = await getBlogDetail(id);
  } catch (error) {
    console.error('ブログ記事の取得に失敗しました:', error);
    notFound();
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="py-16 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            ブログ一覧に戻る
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            {/* Category */}
            {blog.category && (
              <span className="inline-block rounded-full bg-purple-50 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-700 dark:text-purple-300 mb-4">
                {blog.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{blog.title}</h1>

            {/* Meta Info */}
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <time dateTime={blog.publishedAt}>{formattedDate}</time>
            </div>
          </header>

          {/* Thumbnail */}
          {blog.thumbnail && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
              <Image
                src={blog.thumbnail.url}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">この記事をシェア</h3>
            <ShareButtons
              title={blog.title}
              url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${blog.id}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
