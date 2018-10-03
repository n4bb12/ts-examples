import React, { LabelHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const requiredStyles = ({ required }: LabelProps) =>
  css`
    &::after {
      content: ${required ? " *:" : ":"};
    }
  `

export const Label = styled.label<LabelProps>`
  color: #444;
  font-weight: bold;
  margin-bottom: 0.5em;
  ${requiredStyles};
`

export const example = <Label required htmlFor="example">Example</Label>
