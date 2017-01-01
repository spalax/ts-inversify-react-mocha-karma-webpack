/// <reference path="../../../typings/index.d.ts" />
"use strict";
var chai = require("chai");
var React = require("react");
var TestUtils = require("react-addons-test-utils");
var Button_1 = require("../../../src/components/Button/Button");
describe("Button", function () {
    var renderer;
    beforeEach(function () {
        renderer = TestUtils.createRenderer();
        renderer.render(<Button_1.default name="Willson" id="My-Id"/>);
    });
    it("should render correctly", function () {
        var result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "button");
    });
    it("should have correct prop values", function () {
        var result = renderer.getRenderOutput();
        var propValues = result.props.children;
        chai.assert.strictEqual(propValues, "---");
    });
    it("should have correct name and id", function () {
        var result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.props.name, "Willson");
        chai.assert.strictEqual(result.props.id, "My-Id");
    });
});
