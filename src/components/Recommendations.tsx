import { useGetTrendingMoviesQuery } from '../features/recommendations/tmdbApi';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}

export default function Recommendations() {
  const { data, isLoading, error } = useGetTrendingMoviesQuery();
  if (isLoading) return <div className="p-6">Loading recommendations...</div>;
  if (error) return <div className="p-6 text-red-600">Failed to load recommendations.</div>;
  if (!data?.results) return <div className="p-6">No recommendations found.</div>;
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Movie Recommendations</h2>
      <div className="grid gap-4">
        {data.results.slice(0, 5).map((movie: Movie) => (
          <div key={movie.id} className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            {movie.poster_path && (
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={400} height={128} className="w-full h-32 object-cover rounded mb-2" />
            )}
            <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{movie.overview}</p>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-3 py-1 bg-green-600 text-white rounded">Watch Now</a>
          </div>
        ))}
      </div>
    </div>
  );
} 