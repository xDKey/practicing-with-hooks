import { useContext, useState, useEffect } from 'react'
import CounterControl from './CounterControl'
import { Context } from './store'

export default function Counter() {
  const store = useContext(Context)
  const [count, setCount] = useState(store.getState())

  useEffect(() => {
    store.subscribe(setCount)
  }, [store])

  return (
    <>
      <h1>Counter with React.useContext()</h1>
      <h2>{count}</h2>
      <CounterControl />
    </>
  )
}
