import { Stack, Typography } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent={"space-evenly"}
        sx={{ padding: "1rem" }}
      >
        {movies.data?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Stack>
    </>
  );
};

export default MovieList;
