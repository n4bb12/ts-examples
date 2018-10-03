import React from "react";
export const EmailInput = ({ placeholder = "E-Mail" }) => (<input type="email" placeholder={placeholder}/>);
/**
 * Note how the `placeholder` prop is optional.
 */
export const example = <EmailInput />;
