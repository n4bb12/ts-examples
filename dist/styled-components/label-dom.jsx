import React from "react";
import styled, { css } from "styled-components";
const requiredStyles = ({ required }) => css `
    &::after {
      content: ${required ? " *:" : ":"};
    }
  `;
export const Label = styled.label `
  color: #444;
  font-weight: bold;
  margin-bottom: 0.5em;
  ${requiredStyles};
`;
export const example = <Label required htmlFor="example">Example</Label>;
