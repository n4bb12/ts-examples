import React, { FC, useRef } from "react"

export const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => inputRef.current?.focus()

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput} />
    </>
  )
}
