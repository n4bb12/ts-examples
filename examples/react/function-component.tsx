import React, { FC, ReactElement, VFC } from "react"

export interface LabelProps {
  primary?: boolean
}

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export const Label: FC<LabelProps> = ({ children, ...props }) => <label {...props}>{children}</label>

export const example = <Label primary>Primary</Label>
