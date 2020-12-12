import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner tests", () => {
  it("should render", () => {
    expect(render(<Banner />)).toBeTruthy();
  });
});
