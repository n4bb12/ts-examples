import React from "react"
import styled from "styled-components"

export interface Props {
  required?: boolean
}

export const Label = styled.label<Props>`
  color: #333;
  font-weight: bold;
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
