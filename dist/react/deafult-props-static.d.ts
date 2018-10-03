import { Component } from "react";
export interface Props {
    placeholder: string;
    title?: string;
}
export declare class EmailInput extends Component<Props> {
    static defaultProps: {
        placeholder: string;
    };
    render(): JSX.Element;
}
/**
 * Note how the `placeholder` prop is optional, too.
 */
export declare const example: JSX.Element;
