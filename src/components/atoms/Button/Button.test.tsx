import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./";

describe("components/atoms/Button", () => {
  it("should render the correct content", () => {
    render(<Button>My Button</Button>);

    const heading = screen.getByRole("button", {
      name: /my button/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
