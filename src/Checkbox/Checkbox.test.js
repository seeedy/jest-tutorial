// Example for DOM testing

import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Checkbox from "./Checkbox";

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

test("Checkbox changes text after click", () => {
    const { queryByLabelText, getByLabelText } = render(
        <Checkbox labelOn="On" labelOff="Off" />
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/off/i));
    expect(queryByLabelText(/on/i)).toBeTruthy();
});
