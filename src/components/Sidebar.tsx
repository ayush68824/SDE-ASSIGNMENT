import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCategories } from '../features/preferences/preferencesSlice';

const categoriesList = [
  { label: 'Tech', value: 'technology' },
  { label: 'Sports', value: 'sports' },
  { label: 'Business', value: 'business' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Movies', value: 'entertainment' },
  { label: 'Music', value: 'entertainment' },
];

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.preferences.categories);

  const toggleCategory = (cat: string) => {
    const newCats = selected.includes(cat)
      ? selected.filter(c => c !== cat)
      : [...selected, cat];
    dispatch(setCategories(newCats));
  };

  return (
    <aside className="p-4 w-60 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h2 className="font-bold mb-4">Categories</h2>
      <ul>
        {categoriesList.map(cat => (
          <li key={cat.label}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(cat.value)}
                onChange={() => toggleCategory(cat.value)}
                className="mr-2"
              />
              {cat.label}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
} 