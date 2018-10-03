import { Component } from "react";
export interface Props {
    htmlFor?: string;
    required?: boolean;
}
export declare class Label extends Component<Props> {
    render(): JSX.Element;
}
export declare const example: JSX.Element;
