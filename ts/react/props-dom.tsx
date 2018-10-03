import React, { Component, LabelHTMLAttributes } from "react"

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export class Label extends Component<Props> {
  render() {
    const { children, ...props } = this.props
    return <label {...props}>{children}</label>
  }
}

export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
