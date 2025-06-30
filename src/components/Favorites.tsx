import { useAppSelector } from '../store/hooks';
import Link from 'next/link';
import Image from 'next/image';

export default function Favorites() {
  const favorites = useAppSelector(state => state.preferences.favorites);
  if (!favorites.length) return <div className="p-6">No favorites yet.</div>;
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      <div className="grid gap-4">
        {favorites.map(item => (
          <div key={item.url} className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <Link href={item.url} target="_blank" className="block">
              {item.urlToImage && (
                <Image src={item.urlToImage} alt={item.title} width={400} height={128} className="w-full h-32 object-cover rounded mb-2" />
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