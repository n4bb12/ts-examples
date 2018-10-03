import React from "react"
import styled, { css } from "styled-components"

export interface Props {
  htmlFor?: string
  required?: boolean
}

const requiredStyles = ({ required }: Props) =>
  css`
    &::after {
      content: ${required ? " *:" : ":"};
    }
  `

export const Label = styled.label<Props>`
  color: #444;
  font-weight: bold;
  margin-bottom: 0.5em;
  ${requiredStyles};
`

export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
