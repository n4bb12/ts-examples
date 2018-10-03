import React from "react";
const defaultProps = {
    placeholder: "E-Mail",
};
export const EmailInput = (props) => <input {...props}/>;
EmailInput.defaultProps = defaultProps;
/**
 * The `placeholder` prop is not required.
 */
export const example = <EmailInput />;
