import React, { PureComponent } from "react"

export interface LabelProps {
  primary?: boolean
}

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export class Label extends PureComponent<LabelProps> {
  render() {
    const { children, ...props } = this.props

    return <label {...props}>{children}</label>
  }
}

export const example = <Label primary>Example</Label>
