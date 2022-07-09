import React from 'react';

const MovieListHeading = (props) => {
  return (
    <div className="col mt-2 mb-4">
      <div class="row justify-content-md-center">
        <h1>Get{props.heading}</h1>
      </div>
    </div>
  );
};

export default MovieListHeading;
