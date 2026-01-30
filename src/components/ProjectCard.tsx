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
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Project Image */}
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
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
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              GitHub →
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              デモを見る →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
