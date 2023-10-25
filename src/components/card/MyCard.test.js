import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MyCard from "./MyCard";

const movie = {
  vote_average: 8.5,
  poster_path: "/sample-poster.jpg",
  title: "Sample Movie",
  media_type: "movie",
  id: 123,
};

test("renders MyCard component with movie details", () => {
  render(
    <MemoryRouter>
      <MyCard movie={movie} />
    </MemoryRouter>
  );

  const movieTitle = screen.getByText("Sample Movie");
  expect(movieTitle).toBeInTheDocument();

  const image = screen.getByAltText("Sample Movie");
  expect(image).toBeInTheDocument();
});
