import React, { Component } from "react"

export interface Props {
  placeholder: string
  title?: string
}

export class EmailInput extends Component<Props> {
  static defaultProps = {
    placeholder: "E-Mail",
  }

  render() {
    const { children, ...props } = this.props
    return <input type="email" {...props} />
  }
}

/**
 * Note how the `placeholder` prop is optional, too.
 */
export const example = <EmailInput />
