/* eslint-disable react/prop-types */

const WatchedMovie = ({ movie, onDeleteWatched, onSelectMovie }) => {
  return (
    <li>
      <img
        src={movie.poster}
        alt=""
        width={40}
        height={60}
        onError={(e) => (e.target.style.visibility = 'hidden')}
      />
      <h3 onClick={() => onSelectMovie(movie.imdbID)}>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
