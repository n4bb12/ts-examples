import React, { LabelHTMLAttributes } from "react";
export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
export declare const Label: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & Props, any, React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & Props>;
export declare const example: JSX.Element;
