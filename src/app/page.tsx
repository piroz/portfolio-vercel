import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { getBlogs } from '@/lib/microcms';
import type { Blog } from '@/types/blog';
import Link from 'next/link';

// サンプルプロジェクトデータ
const featuredProjects = [
  {
    title: 'XXXサイト',
    description:
      'XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX ',
    image: '/images/project1.jpg',
    tags: ['Go', 'Python'],
    githubUrl: 'https://github.com/piroz',
    demoUrl: 'https://mrazblog.vercel.app',
  },
  // {
  //   title: 'Eコマースサイト',
  //   description:
  //     'Next.js 14のApp RouterとStripe APIを使用したフルスタックのオンラインショップ。商品管理、カート機能、セキュアな決済処理、注文履歴管理を実装。リアルタイム在庫管理とレスポンシブデザインにも対応。',
  //   image: '/images/project1.jpg',
  //   tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
  //   githubUrl: 'https://github.com/yourusername/ecommerce',
  //   demoUrl: 'https://ecommerce-demo.vercel.app',
  // },
  // {
  //   title: 'タスク管理アプリ',
  //   description:
  //     'ドラッグ&ドロップ機能を備えたカンバンボード型のタスク管理アプリ。React DnDとFirebaseを使用してリアルタイム同期を実現。チーム間のコラボレーション機能、タスクのフィルタリング、優先度設定機能を搭載。',
  //   image: '/images/project2.jpg',
  //   tags: ['React', 'Firebase', 'React DnD', 'Material-UI', 'Firestore'],
  //   githubUrl: 'https://github.com/yourusername/task-manager',
  //   demoUrl: 'https://task-manager-demo.vercel.app',
  // },
  // {
  //   title: 'ポートフォリオCMS',
  //   description:
  //     'microCMSを統合したヘッドレスCMSポートフォリオサイト。ISR（Incremental Static Regeneration）による高速なコンテンツ配信を実現。ブログ機能、プロジェクト管理、SEO最適化を実装。',
  //   image: '/images/project3.jpg',
  //   tags: ['Next.js', 'microCMS', 'Vercel', 'ISR', 'TypeScript'],
  //   githubUrl: 'https://github.com/yourusername/portfolio-cms',
  // },
  // {
  //   title: 'リアルタイムチャットアプリ',
  //   description:
  //     'WebSocketを使用したリアルタイムチャットアプリケーション。プライベートチャット、グループチャット、ファイル共有機能を実装。Node.js + Socket.ioによるバックエンド、Reactによるフロントエンド。',
  //   image: '/images/project4.jpg',
  //   tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
  //   githubUrl: 'https://github.com/yourusername/chat-app',
  //   demoUrl: 'https://chat-app-demo.vercel.app',
  // },
  // {
  //   title: 'ブログプラットフォーム',
  //   description:
  //     'マークダウンエディタを備えたブログプラットフォーム。記事の作成・編集・公開、タグ管理、検索機能、コメント機能を実装。認証にはNextAuth.jsを使用し、セキュアなユーザー管理を実現。',
  //   image: '/images/project5.jpg',
  //   tags: ['Next.js', 'NextAuth.js', 'Prisma', 'PostgreSQL', 'MDX'],
  //   githubUrl: 'https://github.com/yourusername/blog-platform',
  //   demoUrl: 'https://blog-platform-demo.vercel.app',
  // },
  // {
  //   title: '天気予報アプリ',
  //   description:
  //     'OpenWeather APIを使用した天気予報アプリ。現在地の天気情報、7日間の天気予報、都市検索機能を実装。レスポンシブデザインとダークモードに対応。',
  //   image: '/images/project6.jpg',
  //   tags: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/yourusername/weather-app',
  //   demoUrl: 'https://weather-app-demo.vercel.app',
  // },
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
