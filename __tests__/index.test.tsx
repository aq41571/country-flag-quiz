import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a text", () => {
    render(<Home />);

    const text = screen.getByText("Get started by editing");

    expect(text).toBeInTheDocument();
  });
});
