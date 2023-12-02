import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './Helper/AppLayout';

const HomePage = lazy(() => import('../Pages/HomePage'));
const SearchMoviePage = lazy(() => import('../Pages/SearchMoviePage'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
