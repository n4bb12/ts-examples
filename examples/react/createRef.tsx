import React, { Component, createRef } from "react"

export class Input extends Component {
  private inputRef = createRef<HTMLInputElement>()

  focusInput = () => this.inputRef.current?.focus()

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput} />
      </>
    )
  }
}
