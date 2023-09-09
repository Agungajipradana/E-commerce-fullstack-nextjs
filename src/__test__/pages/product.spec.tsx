import { describe } from "node:test";
import { render } from "@testing-library/react";
import ProductPage from "@/pages/product";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        route: "/product",
        pathname: " ",
        querry: " ",
        asPath: " ",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
        isReady: true,
      };
    },
  };
});

describe("Product Page", () => {
  it("render product page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
