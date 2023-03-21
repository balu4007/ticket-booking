import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.css";
import Events from "./Components/Events";
import Home from "./Components/Home";
import LatestMovies from "./Components/LatestMovies";
import MovieDetail from "./Components/MovieDetail";
import SearchAppBar from "./Components/Navbar";
import UpcomingMovies from "./Components/UpcomingMovies";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container sx={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<LatestMovies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcomming" element={<UpcomingMovies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
