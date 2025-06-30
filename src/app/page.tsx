'use client';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import Feed from '../components/Feed';
import Trending from '../components/Trending';
import Favorites from '../components/Favorites';
import Recommendations from '../components/Recommendations';
import SocialFeed from '../components/SocialFeed';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadFromStorage } from '../features/preferences/preferencesSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.preferences.darkMode);
  const [search, setSearch] = useState('');

  // Debounced search
  const [debounced, setDebounced] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Load preferences from localStorage
  useEffect(() => { dispatch(loadFromStorage()); }, [dispatch]);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav onSearch={setSearch} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          <div className="md:col-span-2">
            <Feed search={debounced} />
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <Trending />
            <Recommendations />
            <Favorites />
            <SocialFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
