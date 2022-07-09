import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div class="card-movie" style={{ Width: '15rem' }}>
          <img
            class="card-img-top embed-responsive-item"
            src={movie.Poster}
            alt="Card image cap"
          ></img>
          <div class="card-body">
            <h5 class="card-title">({movie.Year})</h5>
            <h5 class="card-title">{movie.Title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
