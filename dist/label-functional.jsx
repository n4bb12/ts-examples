import React from "react";
export const Label = ({ children, ...props }) => (<label {...props}>{children}</label>);
export const example = <Label required htmlFor="example">Example</Label>;
