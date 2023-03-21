import { Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "250px",
        border: "1px solid #ccc",
        padding: ".5rem",
        borderRadius: "10px",
      }}
      gap="10px"
    >
      <img
        onClick={() => {
          navigate(`/movie/${movie._id}`);
        }}
        src={movie.imageUrl}
        alt={movie.name}
        height={"320px"}
        width={"100%"}
        loading="lazy"
      />
      <Rating value={movie.rate} readOnly />
      <Typography>{movie.name}</Typography>
      <Button variant="outlined">Book</Button>
    </Stack>
  );
};

export default MovieCard;
