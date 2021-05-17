import { Dispatch } from 'react'
import { Action } from './reducer'

export default function CounterControl({
  dispatch,
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
