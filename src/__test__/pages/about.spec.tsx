import AboutPage from "@/pages/about";
import { describe } from "node:test";
import { render } from "@testing-library/react";

describe("About Page", () => {
  it("render about page", () => {
    const page = render(<AboutPage />);
    expect(page).toMatchSnapshot();
  });
});
