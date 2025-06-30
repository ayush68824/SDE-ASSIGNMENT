import { useGetTopHeadlinesQuery } from '../features/news/newsApi';
import Link from 'next/link';

export default function Trending() {
  const { data, isLoading, error } = useGetTopHeadlinesQuery({ category: 'general' });
  if (isLoading) return <div className="p-6">Loading trending...</div>;
  if (error) return <div className="p-6 text-red-600">Failed to load trending news.</div>;
  if (!data?.articles) return <div className="p-6">No trending news found.</div>;
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Trending</h2>
      <div className="grid gap-4">
        {data.articles.slice(0, 5).map((item: any) => (
          <div key={item.url} className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <Link href={item.url} target="_blank" className="block">
              {item.urlToImage && (
                <img src={item.urlToImage} alt={item.title} className="w-full h-32 object-cover rounded mb-2" />
              )}
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded">Read More</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 