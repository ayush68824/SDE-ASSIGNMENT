import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleDarkMode } from '../features/preferences/preferencesSlice';

export default function TopNav({ onSearch }: { onSearch: (q: string) => void }) {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.preferences.darkMode);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow">
      <div className="font-bold text-lg">Personalized Dashboard</div>
      <input
        type="text"
        placeholder="Search..."
        className="rounded px-2 py-1 border"
        onChange={e => onSearch(e.target.value)}
      />
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
} 