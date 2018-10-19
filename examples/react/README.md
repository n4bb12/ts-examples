## React

### Deafult Props Static

```tsx
import React, { Component } from "react"

export interface Props {
  /**
   * Since the `placeholder` prop has a default value,
   * make it required to avoid unnecessary null checks.
   */
  placeholder: string
}

export class EmailInput extends Component<Props> {
  static defaultProps = {
    placeholder: "E-Mail",
  }

  render() {
    const { children, ...props } = this.props
    return <input type="email" {...props} />
  }
}

/**
 * The `placeholder` prop does not need to be specified,
 * despite it being mandatory as per the `Props`.
 */
export const example = <EmailInput />
```

### Default Props Destructured

```tsx
import React, { Component } from "react"

export interface Props {
  /**
   * Since the `placeholder` prop doesn't have a static
   * default value, it needs to be optional.
   */
  placeholder?: string
}

export class EmailInput extends Component<Props> {
  render() {
    /**
     * The default value is assigned late when needed.
     * This changes the type from `string | undefined` to `string`.
     */
    const { placeholder = "E-Mail" } = this.props

    return <input type="email" placeholder={placeholder} />
  }
}

export const example = <EmailInput />
```

### Default Props Functional Destructured

```tsx
import React, { SFC } from "react"

export interface Props {
  /**
   * Since the `placeholder` prop doesn't have a static
   * default value, it needs to be optional.
   */
  placeholder?: string
}

/**
 * This changes the type of `placeholder` from `string | undefined` to `string`.
 */
export const EmailInput: SFC<Props> = ({ placeholder = "E-Mail" }) => (
  <input type="email" placeholder={placeholder} />
)

export const example = <EmailInput />
```

### Default Props Functional Static

```tsx
import React, { SFC } from "react"

const defaultProps = {
  placeholder: "E-Mail",
}

/**
 * The default props need to be made optional
 * if consumers should not need to specify them.
 */
export type Props = Partial<typeof defaultProps>

/**
 * The type of `props.placeholder` is unfortunately `string | undefined`.
 */
export const EmailInput: SFC<Props> = props => <input {...props} />

EmailInput.defaultProps = defaultProps

export const example = <EmailInput />
```

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
