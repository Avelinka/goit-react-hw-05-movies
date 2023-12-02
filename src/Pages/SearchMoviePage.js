import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { fetchMovieByQuery } from '../components/Helper/api';

import { Loader } from '../components/Loader/Loader';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
import { Searchbar } from '../components/Searchbar/Searchbar';

export default function SearchMoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    async function getMovieByQuery() {
      try {
        setIsLoading(true);

        const newMovies = await fetchMovieByQuery(query);

        if (newMovies.total_results === 0) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }

        setMovies(newMovies.results);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    getMovieByQuery();
  }, [query]);

  const getQuery = newQuery => {
    if (newQuery === '') {
      toast('Please enter movie title for search', {
        icon: '📝',
      });
      return;
    }
    params.set('query', newQuery);
    setMovies([]);
    setParams(params);
  };

  return (
    <>
      <Searchbar onSubmit={getQuery} />
      {!isLoading && movies.length > 0 && <MoviesGallery movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
}
