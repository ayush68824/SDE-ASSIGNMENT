import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from '../features/preferences/preferencesSlice';
import { newsApi } from '../features/news/newsApi';
import { tmdbApi } from '../features/recommendations/tmdbApi';

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, tmdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 