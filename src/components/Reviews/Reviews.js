import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { fetchMovieReviews } from '../Helper/api';

import { Text } from '../Helper/Layout';
import { Loader } from '../Loader/Loader';
import {
  ReviewsAutor,
  ReviewsItem,
  ReviewsList,
  ReviewsText,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);
        const movieCast = await fetchMovieReviews(movieId);
        setReviews(movieCast);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsAutor>{author}</ReviewsAutor>
                <ReviewsText>{content}</ReviewsText>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <Text>We don't have any reviews for this movie.</Text>
      )}
    </div>
  );
}
