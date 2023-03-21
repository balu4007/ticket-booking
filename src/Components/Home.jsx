import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router";
import RecomendedMovies from "./RecomendedMovies";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => navigate("/latest")}> Latest Movies</Button>
        <Button onClick={() => navigate("/upcomming")}>Upcoming Movies</Button>
        <Button onClick={() => navigate("/events")}>Near by Events</Button>
      </Stack>
      <RecomendedMovies />
    </>
  );
};

export default Home;
