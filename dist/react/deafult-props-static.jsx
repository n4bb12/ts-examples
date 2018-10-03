import React, { Component } from "react";
export class EmailInput extends Component {
    render() {
        const { children, ...props } = this.props;
        return <input type="email" {...props}/>;
    }
}
EmailInput.defaultProps = {
    placeholder: "E-Mail",
};
/**
 * Note how the `placeholder` prop is optional, too.
 */
export const example = <EmailInput />;
