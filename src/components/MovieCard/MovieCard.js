import { useLocation } from 'react-router-dom';

import NoPoster from '../../images/noposter.png';

import {
  MovieListItem,
  MovieImg,
  Link,
  MovieTitleWrapper,
  MovieTitle,
} from './MovieCard.styled';

export const MovieCard = ({ movie: { id, poster_path, title } }) => {
  const location = useLocation();

  const srcPoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : NoPoster;

  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <MovieImg src={srcPoster} alt={title} loading="lazy" />
        <MovieTitleWrapper>
          <MovieTitle>{title}</MovieTitle>
        </MovieTitleWrapper>
      </Link>
    </MovieListItem>
  );
};
