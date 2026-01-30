import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getBlogs } from '@/lib/microcms';
import type { Blog } from '@/types/blog';

export const metadata: Metadata = {
  title: 'Blog - 技術ブログ',
  description: '開発に関する技術記事やノートを公開しています。',
};

export const revalidate = 3600; // 1時間ごとに再検証

export default async function BlogPage() {
  let blogs: Blog[] = [];
  let error: string | null = null;

  try {
    const blogsData = await getBlogs({ limit: 100, orders: '-publishedAt' });
    blogs = blogsData.contents;
  } catch (err) {
    console.error('ブログ記事の取得に失敗しました:', err);
    error = 'ブログ記事の取得に失敗しました。';
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
          <p className="text-lg text-gray-600">
            技術記事や開発のヒント、学んだことをシェアしています。
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              {error}
              <br />
              <span className="text-sm">
                .env.localファイルにmicroCMSのAPIキーが正しく設定されているか確認してください。
              </span>
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">記事がありません</h3>
              <p className="mt-1 text-sm text-gray-500">
                まだブログ記事が投稿されていません。
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
