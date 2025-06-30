import preferencesReducer, { setCategories, toggleDarkMode, addFavorite, removeFavorite } from './preferencesSlice';

describe('preferences reducer', () => {
  it('should handle setCategories', () => {
    const initialState = { categories: [], darkMode: false, favorites: [] };
    const state = preferencesReducer(initialState, setCategories(['Tech', 'Sports']));
    expect(state.categories).toEqual(['Tech', 'Sports']);
  });

  it('should handle toggleDarkMode', () => {
    const initialState = { categories: [], darkMode: false, favorites: [] };
    const state = preferencesReducer(initialState, toggleDarkMode());
    expect(state.darkMode).toBe(true);
  });

  it('should handle addFavorite and removeFavorite', () => {
    const initialState = { categories: [], darkMode: false, favorites: [] };
    const news = { url: 'test-url', title: 'Test', description: '', urlToImage: '' };
    let state = preferencesReducer(initialState, addFavorite(news));
    expect(state.favorites.length).toBe(1);
    state = preferencesReducer(state, removeFavorite('test-url'));
    expect(state.favorites.length).toBe(0);
  });
}); 