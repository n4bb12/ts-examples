import React, { Component } from "react"

export interface EmailInputProps {
  /**
   * Since the `placeholder` prop has a default value,
   * make it required to avoid unnecessary null checks.
   */
  placeholder: string
}

export class EmailInput extends Component<EmailInputProps> {
  static defaultProps = {
    placeholder: "E-Mail",
  }

  render() {
    const { children, ...props } = this.props
    return <input type="email" {...props} />
  }
}

/**
 * The `placeholder` prop does not need to be specified,
 * despite it being mandatory as per the `Props`.
 */
export const example = <EmailInput />
