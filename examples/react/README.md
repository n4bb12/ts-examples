## React

### Deafult Props Static

```tsx
import React, { Component } from "react"

export interface Props {
  placeholder: string
  title?: string
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
 * Note how the `placeholder` prop is optional, too.
 */
export const example = <EmailInput />
```

### Default Props Destructured

```tsx
import React, { Component } from "react"

export interface Props {
  placeholder?: string
}

export class EmailInput extends Component<Props> {
  render() {
    const { placeholder = "E-Mail" } = this.props
    return <input type="email" placeholder={placeholder} />
  }
}

/**
 * Note how the `placeholder` prop is optional.
 */
export const example = <EmailInput />
```

### Default Props Functional Destructured

```tsx
import React, { SFC } from "react"

export interface Props {
  placeholder?: string
}

export const EmailInput: SFC<Props> = ({ placeholder = "E-Mail" }) => (
  <input type="email" placeholder={placeholder} />
)

/**
 * Note how the `placeholder` prop is optional.
 */
export const example = <EmailInput />
```

### Default Props Functional Static

```tsx
import React, { SFC } from "react"

const defaultProps = {
  placeholder: "E-Mail",
}

export type DefaultProps = Partial<typeof defaultProps>

export interface AdditionalProps {
  title?: string
}

export type Props = DefaultProps & AdditionalProps

export const EmailInput: SFC<Props> = (props) => <input {...props} />

EmailInput.defaultProps = defaultProps

/**
 * The `placeholder` prop is not required.
 */
export const example = <EmailInput />
```

### Props Dom

```tsx
import React, { Component, LabelHTMLAttributes } from "react"

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export class Label extends Component<Props> {
  render() {
    const { children, ...props } = this.props
    return <label {...props}>{children}</label>
  }
}

export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
```

### Props Functional

```tsx
import React, { SFC } from "react"

export interface Props {
  htmlFor?: string
  required?: boolean
}

export const Label: SFC<Props> = ({ children, ...props }) => (
  <label {...props}>{children}</label>
)

export const example = <Label required htmlFor="example">Example</Label>
```

### Props Inline

```tsx
import React, { Component } from "react"

export class Label extends Component<{
  htmlFor?: string,
  required?: boolean,
}> {
  render() {
    const { children, ...props } = this.props
    return <label {...props}>{children}</label>
  }
}

export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
```

### Props

```tsx
import React, { Component } from "react"

export interface Props {
  htmlFor?: string
  required?: boolean
}

export class Label extends Component<Props> {
  render() {
    const { children, ...props } = this.props
    return <label {...props}>{children}</label>
  }
}

export const example = (
  <Label required htmlFor="example">
    Example
  </Label>
)
```
