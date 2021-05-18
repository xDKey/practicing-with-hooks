import { useState, useEffect } from 'react'
import { sleep } from './sleep'

export default function WithUseEffect({ value }: { value: string }) {
  const [string, setString] = useState(value)

  useEffect(() => {
    sleep(3000)
    setString('This string will render after 3 second')
  }, [])

  return <span>{string}</span>
}
