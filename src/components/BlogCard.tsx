import Link from 'next/link';
import Image from 'next/image';
import type { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${blog.id}`} className="group block">
      <article className="overflow-hidden rounded-lg glass-card border-purple-100/50 dark:border-purple-500/20 shadow-sm transition-all hover:shadow-lg hover:shadow-purple-500/10">
        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={blog.thumbnail.url}
              alt={blog.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {blog.category && (
            <span className="inline-block rounded-full bg-purple-50 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 mb-3">
              {blog.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {blog.title}
          </h3>

          {/* Description */}
          {blog.description && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{blog.description}</p>
          )}

          {/* Date */}
          <time className="text-sm text-gray-500 dark:text-gray-500" dateTime={blog.publishedAt}>
            {formattedDate}
          </time>
        </div>
      </article>
    </Link>
  );
}
