import { createContext } from 'react'

type Subscriber = {
  update: () => void
}

class Store {
  constructor(
    private count: number, 
    private subscribers: Subscriber[] = []
  ) {}

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

export const store = new Store(0)

export const Context = createContext(store)
