import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  url: string;
  urlToImage?: string;
  title: string;
}

interface PreferencesState {
  categories: string[];
  darkMode: boolean;
  favorites: any[];
}

const initialState: PreferencesState = {
  categories: [],
  darkMode: false,
  favorites: typeof window !== 'undefined' && localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites')!)
    : [],
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories(state: PreferencesState, action: PayloadAction<string[]>) {
      state.categories = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('categories', JSON.stringify(state.categories));
      }
    },
    toggleDarkMode(state: PreferencesState) {
      state.darkMode = !state.darkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
      }
    },
    addFavorite(state: PreferencesState, action: PayloadAction<any>) {
      state.favorites.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state: PreferencesState, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(fav => fav.url !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    loadFromStorage(state: PreferencesState) {
      if (typeof window !== 'undefined') {
        const categories = localStorage.getItem('categories');
        const darkMode = localStorage.getItem('darkMode');
        const favorites = localStorage.getItem('favorites');
        if (categories) state.categories = JSON.parse(categories);
        if (darkMode) state.darkMode = JSON.parse(darkMode);
        if (favorites) state.favorites = JSON.parse(favorites);
      }
    },
  },
});

export const { setCategories, toggleDarkMode, addFavorite, removeFavorite, loadFromStorage } = preferencesSlice.actions;
export default preferencesSlice.reducer; 