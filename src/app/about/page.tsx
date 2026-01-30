import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - 自己紹介',
  description: 'プロフィール、スキル、経歴について紹介します。',
};

const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'SQL/NoSQL', level: 75 },
];

const technologies = [
  { category: 'フロントエンド', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'バックエンド', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
  { category: 'データベース', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'ツール', items: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma'] },
];

const experiences = [
  {
    period: '2022年 - 現在',
    title: 'フルスタックエンジニア',
    company: 'テック株式会社',
    description: 'Next.js + TypeScriptを使用したWebアプリケーション開発、API設計、データベース設計を担当。',
  },
  {
    period: '2020年 - 2022年',
    title: 'フロントエンドエンジニア',
    company: 'ウェブソリューションズ',
    description: 'React/Vue.jsを使用したSPA開発、レスポンシブデザイン実装、パフォーマンス最適化を担当。',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="/images/profile.jpg"
                  alt="プロフィール写真"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">自己紹介</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                こんにちは。Webデベロッパーとして、モダンな技術スタックを用いたアプリケーション開発に取り組んでいます。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                フロントエンドからバックエンドまで幅広く対応し、特にNext.js、React、TypeScriptを用いた開発を得意としています。
                ユーザー体験を第一に考え、パフォーマンスとアクセシビリティにも配慮した設計を心がけています。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                新しい技術の学習に情熱を持ち、オープンソースコミュニティへの貢献も積極的に行っています。
                チーム開発においては、コミュニケーションを大切にし、コードレビューやペアプログラミングを通じて
                チーム全体の技術力向上に貢献しています。
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">スキル</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">使用技術</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">経歴</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-sm font-medium text-blue-600 mb-1">{exp.period}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                  <div className="text-gray-600 mb-3">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
