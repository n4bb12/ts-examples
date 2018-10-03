import React, { SFC } from "react"

export interface Props {
  placeholder?: string
}

export const EmailInput: SFC<Props> = ({ placeholder = "E-Mail" }) => (
  <input type="email" placeholder={placeholder} />
)

/**
 * Note how the `placeholder` prop is optional.
 */
export const example = <EmailInput />
