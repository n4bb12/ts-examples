import { Component } from "react";
export interface LabelProps {
    htmlFor?: string;
    required?: boolean;
}
export declare class Label extends Component<LabelProps> {
    render(): JSX.Element;
}
export declare const example: JSX.Element;
