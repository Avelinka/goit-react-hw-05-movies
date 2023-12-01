import { MovieCard } from 'components/MovieCard/MovieCard';
import { MoviesList } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesList>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </MoviesList>
  );
};
