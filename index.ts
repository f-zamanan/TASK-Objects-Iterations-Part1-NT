/******************************
🎬 Movie Type Definition
******************************/
interface Movie {
  title: string;
  director: string;
  year: number;
  genre: string;
}

const movies: Movie[] = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

/******************************
✅ Q1) Create a function that accepts an array of movies 
and prints the title of each movie.
 
// Example usage:
printMovieTitles(movies);
******************************/

function movieTitle(movies: Movie[]) {
  movies.forEach((movie) => {
    console.log("Movie Title: ", movie.title);
  });
}

movieTitle(movies);

/******************************
✅ Q2) Create a function that accepts:
 - an array of movies
 - a year
and returns how many movies were released in that year.
// Example usage:
console.log(countMoviesByYear(movies, 1994)); // Output: 3
******************************/
function countMoviesByYear(movies: Movie[], year: number): number {
  let filteredArray = movies.filter((movie) => {
    if (movie.year === year) {
      return true;
    }
  });

  return movies.length;
}
let year: number = 2008;
console.log(
  `Number Of movies in the year ${year}:`,
  countMoviesByYear(movies, year)
);
/******************************
✅ Q3) Create a function that:
 - accepts an array of movies
 - a title
 - a new genre
The function should update the genre of the movie with the given title
and return the modified array of movies.
 
// Example usage:
const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");
******************************/
function updateMovieGenre(
  movies: Movie[],
  title: string,
  genre: string
): Movie[] {
  let UpdatedMovies = movies.map((movie) => {
    if (movie.title === title) movie.title = genre;
    return movie;
  });
  return UpdatedMovies;
}
const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");
console.log(updatedMovies);
