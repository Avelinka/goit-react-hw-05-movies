import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { fetchTrendMovies } from '../components/Helper/api';
import { Loader } from '../components/Loader/Loader';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
import { HomeTitle } from '../components/Helper/HomePage.styled';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchTrendMovies();
        setTrendMovies(movies);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      {trendMovies.length > 0 && <MoviesGallery movies={trendMovies} />}
      {isLoading && <Loader />}
    </>
  );
}
