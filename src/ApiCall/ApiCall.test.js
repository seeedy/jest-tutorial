import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import ApiCall from "./ApiCall";

// https://jestjs.io/docs/en/mock-functions#mocking-modules
jest.mock("axios");

test("loads and displays greetings", async () => {
    // ARRANGE
    const url = "/greeting";
    const { getByText, getByRole } = render(<ApiCall url={url} />);

    // ACT
    // using fireEvent to simulate user click action
    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: "hello motherfucker" }
    });

    // simulate click on element with 'Load Greeting' text (i.e. button)
    fireEvent.click(getByText("Load Greeting"));

    // Wait until the mocked request promise resolves and component calls setState and re-renders
    // 'waitForElement' waits until the callback doesn't throw an error
    const greetingTextNode = await waitForElement(() => {
        return getByRole("heading");
    });

    // ASSERT
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(getByRole("heading")).toHaveTextContent("hello motherfucker");
    expect(getByRole("button")).toHaveAttribute("disabled");
});
