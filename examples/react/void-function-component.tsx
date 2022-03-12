import React, { VFC } from "react"

export interface InputProps {
  primary?: boolean
}

/**
 * This component has no `children`.
 */
export const Input: VFC<InputProps> = ({ primary, ...inputProps }) => (
  <input {...inputProps} className={primary ? "primary" : ""} />
)
