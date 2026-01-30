import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { getBlogs } from '@/lib/microcms';
import type { Blog } from '@/types/blog';
import Link from 'next/link';

// サンプルプロジェクトデータ
const featuredProjects = [
  {
    title: 'Eコマースサイト',
    description: 'Next.js + Stripe を使用したモダンなオンラインショップ。リアルタイム在庫管理とセキュアな決済システムを実装。',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    demoUrl: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'タスク管理アプリ',
    description: 'ドラッグ&ドロップ機能を備えたカンバンボード。React DnDとFirebaseを使用したリアルタイム同期。',
    image: '/images/project2.jpg',
    tags: ['React', 'Firebase', 'React DnD', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    demoUrl: 'https://task-manager-demo.vercel.app',
  },
  {
    title: 'ポートフォリオCMS',
    description: 'microCMSを統合したヘッドレスCMSポートフォリオサイト。ISRによる高速なコンテンツ配信。',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'microCMS', 'Vercel', 'ISR'],
    githubUrl: 'https://github.com/yourusername/portfolio-cms',
  },
];

export const revalidate = 3600; // 1時間ごとに再検証

export default async function Home() {
  // 最新のブログ記事を取得（エラーハンドリング付き）
  let latestBlogs: Blog[] = [];
  try {
    const blogsData = await getBlogs({ limit: 3, orders: '-publishedAt' });
    latestBlogs = blogsData.contents;
  } catch (error) {
    console.error('ブログ記事の取得に失敗しました:', error);
    // エラーが発生した場合は空配列のまま続行
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">注目のプロジェクト</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">最近制作したプロジェクトをご紹介します</p>
            </div>
            <Link
              href="/projects"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium transition-colors"
            >
              すべて見る →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      {latestBlogs.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">最新の記事</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">技術ブログと開発ノート</p>
              </div>
              <Link
                href="/blog"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium transition-colors"
              >
                すべて見る →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
