/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as styles from "./styles/button.pcss";

type State = { val: number }

class Button extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    update() {
        this.setState({val: this.state.val + 1});
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {
        return (
            <button onClick = {this.update}
                    className = {styles.el}>
                {this.state.val}
            </button>
        )
    }
}

export default Button;
