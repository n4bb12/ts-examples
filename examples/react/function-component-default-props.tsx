import React, { FC } from "react"

export interface EmailInputProps {
  /**
   * Since the `placeholder` prop doesn't have a static
   * default value, it needs to be optional.
   */
  placeholder?: string
}

/**
 * This changes the type of `placeholder` from `string | undefined` to `string`.
 */
export const EmailInput: FC<EmailInputProps> = ({ placeholder = "E-Mail" }) => (
  <input type="email" placeholder={placeholder} />
)

export const example = <EmailInput />
