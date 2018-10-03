import { Component, LabelHTMLAttributes } from "react";
export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
export declare class Label extends Component<Props> {
    render(): JSX.Element;
}
export declare const example: JSX.Element;
