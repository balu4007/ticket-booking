import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectMovies } from "../features/movie/movieSlice";
import MovieList from "./MovieList";

const RecomendedMovies = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return <MovieList movies={events} title="Recomended Movies" />;
};

export default RecomendedMovies;
