import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const NEWS_API_KEY = 'e4054b7ab45844c18073f33b99a6ab73';

export interface Article {
  url: string;
  urlToImage?: string;
  title: string;
  description?: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query<NewsResponse, { category: string }>({
      query: ({ category }) =>
        `top-headlines?country=us&category=${category.toLowerCase()}&apiKey=${NEWS_API_KEY}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi; 