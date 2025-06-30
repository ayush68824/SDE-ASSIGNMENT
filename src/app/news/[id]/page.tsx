import { mockNews } from '../../../data/mockNews';
import Link from 'next/link';

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = mockNews.find(n => n.id === Number(params.id));
  if (!news) return <div className="p-8 text-red-600">News not found.</div>;
  return (
    <div className="p-8">
      <Link href="/" className="mb-4 inline-block px-4 py-2 bg-gray-200 rounded">Back</Link>
      <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Category: {news.category}</p>
      <p>{news.content}</p>
    </div>
  );
} 