import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getGenres } from "../../actions";
import MenuItem from "./MenuItem";

// komponen
const LinkWrap = styled(Link)`
  text-decoration: none;
`;

const Genres = ({ getGenres, genres }) => {
  useFetchGenres(getGenres);
  if (!genres) {
    return "Loading";
  }
  return <div>{renderList(genres)}</div>;
};

// render list genres tersedia
function renderList(genres) {
  return genres.map(genre => (
    <LinkWrap to={`/genres/{$genre.name}`}>
      <MenuItem key={genre.id} title={genre.name} genres />
    </LinkWrap>
  ));
}

// custom hooks to fetch genres
function useFetchGenres(cb) {
  useEffect(() => {
    cb();
  }, []);
}

// map state to component props
const mapStateToProps = ({ geral }) => {
  return { genres: geral.genres };
};

export default connect(mapStateToProps, { getGenres })(Genres);
