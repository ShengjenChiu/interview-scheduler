import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  // it("renders a confirm button", () => {
  //   const { getByText } = render(<Button confirm>Confirm</Button>);
  //   expect(getByText("Confirm")).toHaveClass("button--confirm");
  // });

  it("does something else it is supposed to do", () => {
    // ...
  });
});