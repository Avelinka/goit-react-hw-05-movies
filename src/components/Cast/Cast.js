import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { fetchMovieCast } from '../Helper/api';

import { Text } from '../Helper/Layout';
import { Loader } from '../Loader/Loader';
import NoImage from '../../images/noimage.png';
import {
  CastList,
  CastItem,
  CastPhoto,
  CastInfoBox,
  CastInfoTitle,
  CastInfoText,
  CastAccent,
} from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setIsLoading(true);
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ profile_path, cast_id, name, character }) => {
            const srcCast = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : NoImage;
            return (
              <CastItem key={cast_id}>
                <CastPhoto src={srcCast} alt={name} loading="lazy" />
                <CastInfoBox>
                  <CastInfoTitle>{name}</CastInfoTitle>
                  <CastInfoText>
                    Character: <CastAccent>{character}</CastAccent>
                  </CastInfoText>
                </CastInfoBox>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <Text>Sorry, there is no information about this actors.</Text>
      )}
    </div>
  );
}
