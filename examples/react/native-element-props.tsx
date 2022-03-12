import React, { LabelHTMLAttributes, FC } from "react"

/**
 * LabelHTMLAttributes is declared by @types/react `index.d.ts`.
 * HTMLLabelElement is declared by @types/react `global.d.ts` (ambient).
 */
export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label: FC<LabelProps> = (props) => <label {...props} />

export const example = (
  <Label className="primary" htmlFor="example">
    Example
  </Label>
)
