import React, { Component } from "react"

export interface LabelProps {
  htmlFor?: string
}

export class Label extends Component<LabelProps> {
  render() {
    const { children, ...props } = this.props
    return <label {...props}>{children}</label>
  }
}

export const example = <Label htmlFor="example">Hello World!</Label>
