import { SFC } from "react";
declare const defaultProps: {
    placeholder: string;
};
export declare type DefaultProps = Partial<typeof defaultProps>;
export interface AdditionalProps {
    title?: string;
}
export declare type Props = DefaultProps & AdditionalProps;
export declare const EmailInput: SFC<Props>;
/**
 * The `placeholder` prop is not required.
 */
export declare const example: JSX.Element;
export {};
