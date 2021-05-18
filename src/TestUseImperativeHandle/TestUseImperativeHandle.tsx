import { useRef } from 'react'
import CustomInput from './CustomInput'

export default function TestUseImperativeHandle() {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <>
      <h1>
        Manipulating custom component with React.useRef() and
        React.useImperativeHandle(){' '}
      </h1>
      <CustomInput label='Label: ' ref={ref} />
      <button onClick={() => ref.current?.focus()}>
        Focus on custom input
      </button>
    </>
  )
}
