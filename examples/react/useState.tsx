import React, { FC, useState } from "react"

export const Input: FC = () => {
  const [value, setValue] = useState("")

  return <input value={value} onChange={(event) => setValue(event.target.value)} />
}
