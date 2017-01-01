/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as styles from "./styles/button.css";


type State = { currentEvent: string }
type Props = { name: string; id: string }

class Button extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {currentEvent: "---"};
        this.update = this.update.bind(this);
    }

    update(e: {type: string}) {
        this.setState({currentEvent: e.type})
    }

    render() {
        return (
            <button onClick = {this.update}
                    onDoubleClick={this.update}
                    className = {styles.red}
                    name = {this.props.name}
                    id = {this.props.id}>
                {this.state.currentEvent}
            </button>
        )
    }
}

export default Button;
