import React, { SFC } from "react"

export interface Props {
  htmlFor?: string
  required?: boolean
}

export const Label: SFC<Props> = ({ children, ...props }) => (
  <label {...props}>{children}</label>
)

export const example = <Label required htmlFor="example">Example</Label>
