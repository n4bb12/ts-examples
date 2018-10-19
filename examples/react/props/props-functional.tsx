import React, { SFC } from "react"

export interface Props {
  primary?: boolean
}

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export const Label: SFC<Props> = ({ children, ...props }) => (
  <label {...props}>{children}</label>
)

export const primary = <Label primary>Primary</Label>
export const secondary = <Label>Secondary</Label>
