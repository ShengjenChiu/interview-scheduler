import React from "react";

import { render, cleanup } from "@testing-library/react";

import DayList from "components/DayList";

afterEach(cleanup);

it("renders DayList without crashing", () => {
  render(<DayList />);
});

it("renders 'Monday' as we setDay it", () => {
  const { getByText } = render(<DayList days={days} day="Monday" setDay={action("setDay")} />);
  expect(getByText("no spots remaining")).toBeInTheDocument();
});

it("renders 'Tuesday' as we setDay it", () => {
  const { getByText } = render(<DayList days={days} day="Tuesday" setDay={action("setDay")} />);
  expect(getByText("1 spot remaining")).toBeInTheDocument();
});

it("renders 'Wednesday' as we setDay it", () => {
  const { getByText } = render(<DayList days={days} day="Wednesday" setDay={action("setDay")} />);
  expect(getByText("2 spots remaining")).toBeInTheDocument();
});