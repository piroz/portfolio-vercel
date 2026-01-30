export interface Blog {
  id: string;
  title: string;
  content: string;
  description?: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  category?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
}

export interface BlogListResponse {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
}
