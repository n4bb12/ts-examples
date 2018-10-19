import React, { PureComponent } from "react"

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export class Label extends PureComponent<{
  primary?: boolean,
}> {
  render() {
    const { children, ...props } = this.props

    return <label {...props}>{children}</label>
  }
}

export const example = <Label primary>Example</Label>
