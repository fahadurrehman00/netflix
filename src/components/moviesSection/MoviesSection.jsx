import MovieList from "../movieList/MovieList";

const MoviesSection = () => {
  return (
    <div>
      <MovieList title="Trending Now" />
      <MovieList title="Today Top Pick for You" />
      <MovieList title="TV Shows" />
      <MovieList title="Only on Netflix" />
      <MovieList title="Top Searches" />
    </div>
  );
};
export default MoviesSection;
