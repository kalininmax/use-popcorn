import { useEffect, useState } from 'react';

const API_KEY = '84015b10';

const useMovie = (initialState, id) => {
  const [movie, setMovie] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [id]);

  return { movie, isLoading };
};

export { useMovie };
