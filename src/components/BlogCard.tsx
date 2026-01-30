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
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
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
            <span className="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 mb-3">
              {blog.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>

          {/* Description */}
          {blog.description && (
            <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
          )}

          {/* Date */}
          <time className="text-sm text-gray-500" dateTime={blog.publishedAt}>
            {formattedDate}
          </time>
        </div>
      </article>
    </Link>
  );
}
