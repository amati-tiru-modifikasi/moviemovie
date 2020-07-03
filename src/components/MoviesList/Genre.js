import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSelectedMenu, getMoviesGenre } from "../../actions";
import NotFound from "../NotFound";
import styled from "styled-components";

const MovieWrapper = styled.div`
  padding: 2rem;
`;

const MovieImg = styled.img`
  width: 200px;
  height: auto;
`;

const Genre = ({ geral, match, setSelectedMenu, getMoviesGenre, movies }) => {
  const { genres, selected, base } = geral;

  if (!genres) {
    return <div>Loading</div>;
  }

  // call hook to set sidebar selected menu if valid
  useSetSelected(match.params.name, setSelectedMenu, genres);

  // call hook to fetch movies of the genre
  useFetchMoviesGenre(match.params.name, getMoviesGenre, genres);

  if (!selected) {
    return <NotFound />;
  }

  const baseUrl = base.images.base_url;
  return <div>Genres Container {renderMovies(movies.results, baseUrl)}</div>;
};

function renderMovies(movies, baseUrl) {
  return movies.map(movie => (
    <MovieWrapper key={movie.id}>
      {movie.original_title}
      <MovieImg src={`${baseUrl}w780${movie.poster_path}`} />
    </MovieWrapper>
  ));
}

function useFetchMoviesGenre(name, cb) {
  useEffect(() => {
    cb(name);
  }, [name]);
}

function useSetSelected(name, cb, genres) {
  useEffect(() => {
    if (genres.find(el => el.name === name)) {
      cb(name);
    }
  }, [name]);
}

// Map State to Component Props
const mapStateToProps = ({ geral, movies }) => {
  return {
    geral,
    movies
  };
};

export default connect(mapStateToProps, { setSelectedMenu, getMoviesGenre })(
  Genre
);
