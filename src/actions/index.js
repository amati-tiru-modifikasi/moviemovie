import * as TYPES from "./types";
import tmdbAPI from "../api/tmdb";

export const getConfig = () => async dispatch => {
  const res = await tmdbAPI.get("/configuration");
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data
  });
};
