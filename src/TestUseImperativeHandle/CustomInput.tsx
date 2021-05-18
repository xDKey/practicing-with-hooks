import { useRef, useImperativeHandle, Ref, forwardRef, useState } from 'react'

type MyInputHandles = {
  focus: () => void
}

const CustomInput = (
  { label }: { label: string },
  ref: Ref<MyInputHandles>
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
  }))

  return (
    <label>
      {label}
      <input
        ref={inputRef}
        placeholder='Focus on me'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  )
}

export default forwardRef(CustomInput)
