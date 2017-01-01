/// <reference path="../../../typings/index.d.ts" />

import * as chai from "chai";
import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import Button from "../../../src/components/Button/Button";

describe("Button", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Button name="Willson" id="My-Id" />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "button");
    });

    it("should have correct prop values", () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props.children;
        chai.assert.strictEqual(propValues, "---");
    });

    it ("should have correct name and id", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.props.name, "Willson");
        chai.assert.strictEqual(result.props.id, "My-Id");
    });
});
