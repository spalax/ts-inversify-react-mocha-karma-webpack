/// <reference path="../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var styles = require("./styles/button.css");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.state = { currentEvent: "---" };
        _this.update = _this.update.bind(_this);
        return _this;
    }
    Button.prototype.update = function (e) {
        this.setState({ currentEvent: e.type });
    };
    Button.prototype.render = function () {
        return (<button onClick={this.update} onDoubleClick={this.update} className={styles.red} name={this.props.name} id={this.props.id}>
                {this.state.currentEvent}
            </button>);
    };
    return Button;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
