import React, { SFC } from "react"

const defaultProps = {
  placeholder: "E-Mail",
}

export type DefaultProps = Partial<typeof defaultProps>

export interface AdditionalProps {
  title?: string
}

export type Props = DefaultProps & AdditionalProps

export const EmailInput: SFC<Props> = (props) => <input {...props} />

EmailInput.defaultProps = defaultProps

/**
 * The `placeholder` prop is not required.
 */
export const example = <EmailInput />
