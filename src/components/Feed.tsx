import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useGetTopHeadlinesQuery } from '../features/news/newsApi';
import { addFavorite, removeFavorite } from '../features/preferences/preferencesSlice';
import { Reorder } from 'framer-motion';
import Image from 'next/image';

export default function Feed({ search }: { search: string }) {
  const categories = useAppSelector(state => state.preferences.categories);
  const selectedCategory = categories[0] || 'general';
  const { data, isLoading, error } = useGetTopHeadlinesQuery({ category: selectedCategory });
  const [order, setOrder] = useState<number[]>([]);
  const [visible, setVisible] = useState(5);
  const loader = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.preferences.favorites);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setVisible(v => v + 5);
      },
      { threshold: 1 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => { if (loader.current) observer.unobserve(loader.current); };
  }, []);

  // Set order when data changes
  useEffect(() => {
    if (data?.articles) setOrder(data.articles.map((_: any, idx: number) => idx));
  }, [data]);

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">Failed to load news.</div>;
  if (!data?.articles) return <div className="p-8">No news found.</div>;

  // Filter by search
  const filtered = data.articles
    .filter((a: any) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      (a.description && a.description.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="flex-1 p-6">
      <Reorder.Group axis="y" values={order} onReorder={setOrder}>
        {order
          .map(idx => filtered[idx])
          .filter(Boolean)
          .slice(0, visible)
          .map((item: any, idx: number) => (
            <Reorder.Item
              key={item.url}
              value={idx}
              whileHover={{ scale: 1.03 }}
              className="mb-4 p-4 bg-white dark:bg-gray-700 rounded shadow cursor-pointer relative"
            >
              <button
                className="absolute top-2 right-2 z-10 text-xl"
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (favorites.some(fav => fav.url === item.url)) {
                    dispatch(removeFavorite(item.url));
                  } else {
                    dispatch(addFavorite(item));
                  }
                }}
                aria-label={favorites.some(fav => fav.url === item.url) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {favorites.some(fav => fav.url === item.url) ? '❤️' : '🤍'}
              </button>
              <Link href={item.url} target="_blank" className="block">
                {item.urlToImage && (
                  <Image src={item.urlToImage} alt={item.title} width={400} height={192} className="w-full h-48 object-cover rounded mb-2" />
                )}
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded">Read More</span>
              </Link>
            </Reorder.Item>
          ))}
      </Reorder.Group>
      <div ref={loader} />
    </div>
  );
} 