import React, { Component } from "react"

export class Label extends Component<{
  htmlFor?: string,
  required?: boolean,
}> {
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
