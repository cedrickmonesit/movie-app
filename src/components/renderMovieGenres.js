//filter the genres that the movie has compare it to the genres in the api request
const renderMovieGenres = (movieGenres, genres) => {
  if (movieGenres && genres) {
    return movieGenres.map(movieGenre => {
      return genres.map(genre => {
        //the else if is for a movie with a genre_ids array but the objects in the array have no property of id
        if (movieGenre.id) {
          if (movieGenre.id === genre.id) {
            return `${genre.name} | `;
          }
        } else if (movieGenre) {
          if (movieGenre === genre.id) {
            return `${genre.name} | `;
          }
        }
        return null;
      });
    });
  }
  return null;
};

export default renderMovieGenres;
