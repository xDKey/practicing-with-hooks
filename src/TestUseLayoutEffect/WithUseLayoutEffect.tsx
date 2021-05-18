import { useState, useLayoutEffect } from 'react'
import { sleep } from './sleep'

export default function WithUseLayoutEffect ({value}: {value: string}) {
    const [string, setString] = useState(value)

    useLayoutEffect(() => {
      sleep(3000)
      setString('This string will render after 3 second')
    }, [])
  
    return (
      <span>
        {string}
      </span>
    )
}