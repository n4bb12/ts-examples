import React, { FC } from "react"

const defaultProps = {
  placeholder: "E-Mail",
}

/**
 * The default props need to be made optional
 * if consumers should not need to specify them.
 */
export type Props = Partial<typeof defaultProps>

/**
 * The type of `props.placeholder` is unfortunately `string | undefined`.
 */
export const EmailInput: FC<Props> = (props) => <input {...props} />

EmailInput.defaultProps = defaultProps

export const example = <EmailInput />
