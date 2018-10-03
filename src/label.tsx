import React, { Component } from "react"

export interface LabelProps {
  htmlFor?: string
  required?: boolean
}

export class Label extends Component<LabelProps> {
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
