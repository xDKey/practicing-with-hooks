import { createContext, useContext, useEffect, useState } from 'react'

type Subscriber = {
  update: () => void
}

class Store {
  constructor(private count: number, private subscribers: Subscriber[] = []) {}

  public getState = () => this.count

  public increment = () => {
    this.count += 1
    this.notify()
  }

  public decrement = () => {
    this.count -= 1
    this.notify()
  }

  private notify = () => {
    this.subscribers.forEach((item) => item.update())
  }

  public subscribe = (callback: Function) => {
    const subscriber: Subscriber = {
      update: () => callback(this.count),
    }
    this.subscribers.push(subscriber)
  }
}

const store = new Store(0)

const Context = createContext(store)

export default function TestUseContext() {
  return (
    <Context.Provider value={store}>
      <Counter />
    </Context.Provider>
  )
}

const Counter = () => {
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

const CounterControl = () => {
  const { decrement, increment } = useContext(Context)

  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}
