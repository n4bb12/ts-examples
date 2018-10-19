import React, { Component } from "react"

export interface Props {
  /**
   * Since the `placeholder` prop doesn't have a static
   * default value, it needs to be optional.
   */
  placeholder?: string
}

export class EmailInput extends Component<Props> {
  render() {
    /**
     * The default value is assigned late when needed.
     * This changes the type from `string | undefined` to `string`.
     */
    const { placeholder = "E-Mail" } = this.props

    return <input type="email" placeholder={placeholder} />
  }
}

export const example = <EmailInput />
