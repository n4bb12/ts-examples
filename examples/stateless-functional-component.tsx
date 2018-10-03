import React, { SFC } from "react"

export interface LabelProps {
  htmlFor?: string
}

export const Label: SFC<LabelProps> = ({ children, ...props }) => (
  <label {...props}>{children}</label>
)

export const example = <Label htmlFor="example">Hello World!</Label>
