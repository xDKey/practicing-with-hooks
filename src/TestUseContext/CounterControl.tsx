import { useContext } from 'react'
import { Context } from './store'

export default function CounterControl () {
    const { decrement, increment } = useContext(Context)
  
    return (
      <>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </>
    )
  }