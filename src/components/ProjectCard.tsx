import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg glass-card border-purple-100/50 dark:border-purple-500/20 shadow-sm transition-all hover:shadow-lg hover:shadow-purple-500/10">
      {/* Project Image */}
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              GitHub →
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
            >
              デモを見る →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
