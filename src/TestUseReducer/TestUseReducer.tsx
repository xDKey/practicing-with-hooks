import { useReducer } from 'react'
import CounterControl from './CounterControl'
import { reducer } from './reducer'
import Counter from './Counter'

export default function TestUseReducer() {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>Counter with React.useReducer()</h1>
      <Counter count={state} />
      <CounterControl dispatch={dispatch} />
    </>
  )
}
