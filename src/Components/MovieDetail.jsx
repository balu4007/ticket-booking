import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectMovies } from "../features/movie/movieSlice";

const MovieDetail = () => {
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const movielist = [
    ...movies.upComing.data,
    ...movies.latest.data,
    ...movies.events.data,
  ];
  console.log("movielist", movielist);
  const movie = movielist.find((movie) => movie._id === id);
  console.log(movie);

  return <div>MovieDetail</div>;
};

export default MovieDetail;
