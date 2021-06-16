import React from 'react';

const movies = [
    { id: 1, title: 'Toy Story', releaseYear: 1995 },
    { id: 2, title: 'The Iron Giant', releaseYear: 1999 },
    { id: 3, title: 'Spider-Man: Into the Spider-Verse', releaseYear: 2018 },
  ];

  function Movies() {
    return (
        <div>
            {movies.map((movie, index) => (
                <div>{movie.title}, {movie.releaseYear}</div>
            ))}
        </div>
        );
  }

  export default Movies;