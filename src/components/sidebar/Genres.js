import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getGenres } from "../../actions";
import MenuItem from "./MenuItem";

// komponen
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
    <MenuItem key={genre.id} title={genre.name} genres />
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
