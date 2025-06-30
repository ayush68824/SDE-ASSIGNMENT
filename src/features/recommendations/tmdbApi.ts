import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Using the user's real TMDB API key for recommendations
const TMDB_API_KEY = 'e4054b7ab45844c18073f33b99a6ab73';

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<MovieResponse, void>({
      query: () => `trending/movie/week?api_key=${TMDB_API_KEY}`,
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = tmdbApi; 