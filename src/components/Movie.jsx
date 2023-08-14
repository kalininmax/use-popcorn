/* eslint-disable react/prop-types */

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <picture>
        <img
          src={movie.Poster}
          alt=""
          width={40}
          height={60}
          onError={(e) => (e.target.style.visibility = 'hidden')}
        />
      </picture>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
