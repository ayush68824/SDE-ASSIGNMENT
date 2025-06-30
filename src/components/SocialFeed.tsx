const mockSocialPosts = [
  {
    id: 1,
    username: 'johndoe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Excited about the new tech trends! 🚀',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    username: 'janedoe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Just watched an amazing movie! 🎬',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    username: 'techguru',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Check out my latest blog on AI advancements.',
    image: '',
  },
];

export default function SocialFeed() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Social Feed</h2>
      <div className="grid gap-4">
        {mockSocialPosts.map(post => (
          <div key={post.id} className="p-4 bg-white dark:bg-gray-700 rounded shadow flex gap-4">
            <img src={post.avatar} alt={post.username} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-bold">@{post.username}</div>
              <div className="mb-2">{post.text}</div>
              {post.image && (
                <img src={post.image} alt="post" className="w-full h-32 object-cover rounded" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 