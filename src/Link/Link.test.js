// Example for snapshot testing

import React from "react";
import Link from "./Link";
import TestRenderer, { act } from "react-test-renderer";

test("Link changing class when hovered", () => {
    const component = TestRenderer.create(
        <Link href="xailabs.com">Xailabs</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger
    act(() => tree.props.onMouseEnter());
    // re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // trigger
    act(() => tree.props.onMouseLeave());
    // render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
