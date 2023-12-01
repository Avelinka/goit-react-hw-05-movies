import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoMdArrowBack } from 'react-icons/io';

import { fetchMovieDetails } from '../components/Helper/api';
import { Loader } from '../components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Link } from '../components/Helper/Layout';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location).current.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        const movieById = await fetchMovieDetails(movieId);
        setMovie(movieById);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef} className="backLinkRef">
        <IoMdArrowBack size="20" />
        Go back
      </Link>
      {isLoading && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      <Outlet />
    </div>
  );
}
