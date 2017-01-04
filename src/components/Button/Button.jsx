/// <reference path="../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var styles = require("./styles/button.pcss");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.state = { val: 0 };
        _this.update = _this.update.bind(_this);
        return _this;
    }
    Button.prototype.componentWillMount = function () {
        console.log("Component will mount");
    };
    Button.prototype.update = function () {
        this.setState({ val: this.state.val + 1 });
    };
    Button.prototype.componentDidMount = function () {
        console.log("Component did mount");
    };
    Button.prototype.componentWillUnmount = function () {
        console.log("Component will unmount");
    };
    Button.prototype.render = function () {
        return (<button onClick={this.update} className={styles.el}>
                {this.state.val}
            </button>);
    };
    return Button;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
