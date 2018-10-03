import React, { Component } from "react";
export class EmailInput extends Component {
    render() {
        const { placeholder = "E-Mail" } = this.props;
        return <input type="email" placeholder={placeholder}/>;
    }
}
/**
 * Note how the `placeholder` prop is optional.
 */
export const example = <EmailInput />;
