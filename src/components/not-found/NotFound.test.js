import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "./NotFound";

test("renders NotFound component with error message", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  const errorMessage = screen.getByText("Sorry, something went wrong!");
  expect(errorMessage).toBeInTheDocument();

  const returnHomeButton = screen.getByText("Return Home");
  expect(returnHomeButton).toBeInTheDocument();

  expect(returnHomeButton).toHaveAttribute("href", "/");
});
