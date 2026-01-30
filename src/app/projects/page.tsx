import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects - プロジェクト一覧',
  description: 'これまでに制作したプロジェクトをご紹介します。',
};

const projects = [
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

export default function ProjectsPage() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-purple-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">プロジェクト</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            これまでに制作したプロジェクトの一部をご紹介します。各プロジェクトは実践的な技術スタックを使用し、
            ユーザー体験とコード品質を重視して開発しています。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass-card border-purple-100/50 dark:border-purple-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            一緒にプロジェクトを始めませんか？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            新しいアイデアやプロジェクトについて、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-purple-600 dark:bg-purple-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 dark:hover:bg-purple-400 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
}
