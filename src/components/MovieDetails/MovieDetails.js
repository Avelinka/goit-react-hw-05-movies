import NoImage from '../../images/noimage.png';

import {
  MovieContainer,
  MovieDetailsWrap,
  PosterWrap,
  PosterImg,
  MovieInfo,
  MovieTitle,
  UserScore,
  ScoreSpan,
  InfoTitle,
  OverviewText,
  GenresList,
  GenresItem,
  AdditionalWrap,
  AdditionalList,
  AdditionalItem,
  Link,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;

  const releaseDate = new Date(release_date).getFullYear();
  const userScore = Math.round((vote_average / 10) * 100);

  const srcPoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : NoImage;
  return (
    <MovieContainer>
      <MovieDetailsWrap>
        <PosterWrap>
          <PosterImg src={srcPoster} alt={title} loading="lazy" />
        </PosterWrap>
        <MovieInfo>
          <MovieTitle>
            {title} ({releaseDate})
          </MovieTitle>
          <UserScore>
            User Score:
            <ScoreSpan> {userScore}%</ScoreSpan>
          </UserScore>
          <InfoTitle>Overview</InfoTitle>
          <OverviewText>{overview}</OverviewText>
          <InfoTitle>Genres</InfoTitle>
          <GenresList>
            {genres.map(({ id, name }) => {
              return <GenresItem key={id}>{name}</GenresItem>;
            })}
          </GenresList>
        </MovieInfo>
      </MovieDetailsWrap>
      <AdditionalWrap>
        <InfoTitle>Additional information</InfoTitle>
        <AdditionalList>
          <AdditionalItem>
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalWrap>
    </MovieContainer>
  );
};
