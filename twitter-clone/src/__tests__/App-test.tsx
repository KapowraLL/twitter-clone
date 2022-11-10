import { screen, render } from "@testing-library/react";
import App from "../App";

it("should render node with app role", () => {
  render(<App />);
  expect(screen.getByRole("app")).toBeTruthy;
});
