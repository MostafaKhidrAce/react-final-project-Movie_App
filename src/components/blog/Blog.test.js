import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

test("renders Blog component with an image", () => {
  render(<Blog />);

  const image = screen.getByAltText("...");
  expect(image).toBeInTheDocument();
});
