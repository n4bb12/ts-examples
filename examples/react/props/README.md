## Props

### Props Dom

```tsx
import React, { LabelHTMLAttributes, SFC } from "react"

/**
 * LabelHTMLAttributes is declared by @types/react `index.d.ts`.
 * HTMLLabelElement is declared by @types/react `global.d.ts` (ambient).
 */
export type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label: SFC<Props> = props => <label {...props} />

export const example = (
  <Label className="primary" htmlFor="example">
    Example
  </Label>
)
```

### Props Functional

```tsx
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
```

### Props Inline

```tsx
import React, { PureComponent } from "react"

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export class Label extends PureComponent<{
  primary?: boolean,
}> {
  render() {
    const { children, ...props } = this.props

    return <label {...props}>{children}</label>
  }
}

export const example = <Label primary>Example</Label>
```

### Props

```tsx
import React, { PureComponent } from "react"

export interface Props {
  primary?: boolean
}

/**
 * `children` exists implicitly and is of type `ReactNode`.
 * `...props` is of type `{ primary?: boolean | undefined }`.
 */
export class Label extends PureComponent<Props> {
  render() {
    const { children, ...props } = this.props

    return <label {...props}>{children}</label>
  }
}

export const example = <Label primary>Example</Label>
```
