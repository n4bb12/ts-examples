## Default Props

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
export const EmailInput: SFC<Props> = (props) => <input {...props} />

EmailInput.defaultProps = defaultProps

export const example = <EmailInput />
```
