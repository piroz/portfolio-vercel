import { createClient } from 'microcms-js-sdk';
import type { Blog, BlogListResponse } from '@/types/blog';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ記事一覧を取得
export const getBlogs = async (queries?: {
  limit?: number;
  offset?: number;
  orders?: string;
}): Promise<BlogListResponse> => {
  const response = await client.get<BlogListResponse>({
    endpoint: 'blogs',
    queries,
  });
  return response;
};

// ブログ記事詳細を取得
export const getBlogDetail = async (contentId: string): Promise<Blog> => {
  const response = await client.get<Blog>({
    endpoint: 'blogs',
    contentId,
  });
  return response;
};

// ブログ記事のIDリストを取得（SSG用）
export const getBlogIds = async (): Promise<string[]> => {
  const response = await client.get<BlogListResponse>({
    endpoint: 'blogs',
    queries: {
      fields: 'id',
      limit: 100,
    },
  });
  return response.contents.map((blog) => blog.id);
};
