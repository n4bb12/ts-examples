import React from "react"
import styled from "styled-components"

export interface LabelProps {
  required?: boolean
}

export const Label = styled.label<LabelProps>`
  color: #444;
  font-weight: bold;
  margin-bottom: 0.5em;
`

/**
 * Note how the label also supports the native `htmlFor`
 * prop, because `styled-components` merges `Props` with
 * `LabelHTMLAttributes<HTMLLabelElement>`.
 */
export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
