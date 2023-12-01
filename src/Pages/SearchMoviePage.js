import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { fetchMovieByQuery } from '../components/Helper/api';

import { Loader } from '../components/Loader/Loader';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
import Searchbar from '../components/Searchbar/Searchbar';

export default function SearchMoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovieByQuery() {
      try {
        setIsLoading(true);

        const movies = await fetchMovieByQuery(query);

        if (movies.lenght === 0) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies(movies);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    getMovieByQuery();
  }, [query]);

  const addQuery = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
  };

  return (
    <>
      <Searchbar addQuery={addQuery} />
      {movies.length > 0 && <MoviesGallery movies={movies} />}
      {isLoading && <Loader />}
      {!isLoading && movies.length > 0 && <MoviesGallery movies={movies} />}
    </>
  );
}
