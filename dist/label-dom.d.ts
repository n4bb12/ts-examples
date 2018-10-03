import { Component, LabelHTMLAttributes } from "react";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
export declare class Label extends Component<LabelProps> {
    render(): JSX.Element;
}
export declare const example: JSX.Element;
