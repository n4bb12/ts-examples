import React, { LabelHTMLAttributes, SFC } from "react"

/**
 * LabelHTMLAttributes is declared by @types/react `index.d.ts`.
 * HTMLLabelElement is declared by @types/react `global.d.ts` (ambient).
 */
export type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label: SFC<Props> = (props) => <label {...props} />

export const example = (
  <Label className="primary" htmlFor="example">
    Example
  </Label>
)
